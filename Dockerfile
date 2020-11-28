FROM node:15.3.0-alpine
ARG GRAPHQL_SCHEMA_PATH
ENV GRAPHQL_SCHEMA_PATH=${GRAPHQL_SCHEMA_PATH}
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN echo $GRAPHQL_SCHEMA_PATH
RUN npm run build
CMD ["npm", "start"]
