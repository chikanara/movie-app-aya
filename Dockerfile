FROM node as build-stage

WORKDIR /app
COPY package.json .
COPY package-lock.json ./
RUN npm install --silent
ADD . .
RUN npm run build

FROM nginx as production-stage
COPY --from=build-stage /app/build/ /usr/share/nginx/html/



