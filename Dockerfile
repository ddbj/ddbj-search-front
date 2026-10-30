# Base image tags name only the major or minor version so that rebuilds pick up
# OS package fixes. Build with `--pull` to fetch the latest image for each tag.
FROM node:26-trixie-slim AS build

WORKDIR /app

# The Node.js image does not ship corepack.
RUN npm install -g pnpm@12.16.1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

ARG VITE_API_PATH
ENV VITE_API_PATH=${VITE_API_PATH}
ARG VITE_DEPLOYMENT_ENV=LIVE
ENV VITE_DEPLOYMENT_ENV=${VITE_DEPLOYMENT_ENV}

COPY . .

# The MSW worker is a public asset only for `pnpm dev:msw`. Remove it before the
# runtime stage copies dist, so that no image layer contains it.
RUN pnpm build && rm -f dist/mockServiceWorker.js

FROM nginx:1.30-alpine-slim AS runtime

ARG VERSION=0.0.0.dev0

LABEL org.opencontainers.image.title="ddbj-search-front" \
    org.opencontainers.image.description="DDBJ Search frontend" \
    org.opencontainers.image.version="${VERSION}" \
    org.opencontainers.image.authors="Bioinformatics and DDBJ Center" \
    org.opencontainers.image.url="https://github.com/ddbj/ddbj-search-front" \
    org.opencontainers.image.source="https://github.com/ddbj/ddbj-search-front" \
    org.opencontainers.image.documentation="https://github.com/ddbj/ddbj-search-front/blob/main/README.md" \
    org.opencontainers.image.licenses="Apache-2.0"

# The stock server block listens on port 80 and is not used.
RUN rm -f /etc/nginx/conf.d/default.conf

# Routing rules (SPA fallback below /search, landing page at the root) live here.
COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000
