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
ARG VITE_DEPLOYMENT_ENV=LIVE
ENV VITE_DEPLOYMENT_ENV=${VITE_DEPLOYMENT_ENV}

COPY . .

RUN pnpm build

FROM nginx:1.28.0-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

# MSW init worker is shipped as a public static asset for `pnpm dev:msw`;
# strip it from the production image so it cannot be loaded by clients.
# The stock server block listens on port 80 and is not used.
RUN rm -f /usr/share/nginx/html/mockServiceWorker.js /etc/nginx/conf.d/default.conf

# Routing rules (SPA fallback below /search, landing page at the root) live here.
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
