FROM node:18.20.0-bookworm

LABEL org.opencontainers.image.authors="DDBJ (Bioinformatics and DDBJ Center)"
LABEL org.opencontainers.image.url="https://github.com/ddbj/ddbj-search-front"
LABEL org.opencontainers.image.documentation="https://github.com/ddbj/ddbj-search-front/blob/main/README.md"
LABEL org.opencontainers.image.source="https://github.com/ddbj/ddbj-search-front/blob/main/Dockerfile"
LABEL org.opencontainers.image.version="20240423"
LABEL org.opencontainers.image.licenses="Apache-2.0"

RUN apt update && \
    apt install -y --no-install-recommends \
    tini && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

RUN corepack enable

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
# Not working
# RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm run build

EXPOSE 3000

ENTRYPOINT ["tini", "--"]
CMD ["pnpm", "run", "preview"]
