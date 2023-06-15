FROM node:lts as build
ARG PRODUCTION=false
WORKDIR /usr/src/app
RUN sh -c '[ -z "$http_proxy" ] || ( npm config set proxy $http_proxy; npm config set https-proxy $http_proxy )'
COPY package.json package-lock.json ./
RUN npm install
COPY ./angular.json ./tsconfig.json ./tsconfig.app.json ./tsconfig.spec.json ./messages*.xlf ./
COPY ./src ./src
RUN if [ "${PRODUCTION}" = true ];then \
      npm run build:prod; \
    else \
      npm run build; \
    fi;

FROM nginx:stable-alpine
ENV NGINX_PORT=80 NGINX_DEPLOYMENT_CONTEXT=/
COPY nginx.conf /etc/nginx/nginx.conf
# fixed unshown font icons with mime.types file and ngnix.conf > location ~* .(js|css|ttf|ttc|otf|eot|woff|woff2)$ {...
COPY mime.types /etc/nginx/mime.types
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html/
