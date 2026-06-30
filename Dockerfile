FROM node:22.21.1-bookworm AS base

ARG VERSION=0.0.0.dev0

LABEL org.opencontainers.image.title="ddbj-search-front" \
    org.opencontainers.image.description="DDBJ Search frontend" \
    org.opencontainers.image.version="${VERSION}" \
    org.opencontainers.image.authors="Bioinformatics and DDBJ Center" \
    org.opencontainers.image.url="https://github.com/ddbj/ddbj-search-front" \
    org.opencontainers.image.source="https://github.com/ddbj/ddbj-search-front" \
    org.opencontainers.image.documentation="https://github.com/ddbj/ddbj-search-front/blob/main/README.md" \
    org.opencontainers.image.licenses="Apache-2.0"

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.33.1 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM base AS build

ARG VITE_API_PATH
ENV VITE_API_PATH=${VITE_API_PATH}

COPY . .

RUN pnpm build

FROM node:22.21.1-bookworm-slim AS runtime

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.33.1 --activate

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./

RUN pnpm install --prod --frozen-lockfile

# MSW init worker is shipped as a public static asset for `pnpm dev:msw`;
# strip it from the production image so it cannot be loaded by clients.
RUN rm -f dist/mockServiceWorker.js

EXPOSE 3000

# Run as plain static server (no -s/--single). SPA fallback rules live in
# dist/serve.json (see public/serve.json) so that /search/** rewrites to
# /search/index.html (the real SPA), while existing files (assets, /index.html
# landing page) keep being served from the filesystem.
#
# Invoke the local serve binary directly rather than via `pnpm exec`. Under
# `userns_mode: keep-id`, the container HOME resolves to /app (which is owned
# by root from the build stage), so `pnpm exec` triggers corepack and crashes
# with EACCES while trying to create /app/.cache/node/corepack. The shipped
# binary already wires everything up at build time, so corepack is not needed
# at runtime.
CMD ["./node_modules/.bin/serve", "dist", "-l", "3000"]
