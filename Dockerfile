FROM node:18.20.0-bookworm

LABEL org.opencontainers.image.title="ddbj-search-front" \
    org.opencontainers.image.description="Frontend for DDBJ Search" \
    org.opencontainers.image.version="0.1.0" \
    org.opencontainers.image.authors="Bioinformatics and DDBJ Center" \
    org.opencontainers.image.url="https://github.com/ddbj/ddbj-search-front" \
    org.opencontainers.image.source="https://github.com/ddbj/ddbj-search-front" \
    org.opencontainers.image.documentation="https://github.com/ddbj/ddbj-search-front/blob/main/README.md" \
    org.opencontainers.image.licenses="Apache-2.0"

RUN corepack enable

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

ENV PNPM_STORE_DIR=/app/.pnpm-store
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000

ENTRYPOINT [""]
CMD ["sleep", "infinity"]
