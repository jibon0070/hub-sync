FROM node:24.15.0-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g corepack@latest --force && \
  corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/pnpm/store \
  pnpm fetch --frozen-lockfile && \
  pnpm install --frozen-lockfile --offline

COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
