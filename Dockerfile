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

EXPOSE 3000

CMD ["pnpm", "exec", "serve", "-s", "dist", "-l", "3000"]
