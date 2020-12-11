FROM node:15.4.0-alpine
ARG GRAPHQL_SCHEMA_PATH
ENV GRAPHQL_SCHEMA_PATH=${GRAPHQL_SCHEMA_PATH}
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
