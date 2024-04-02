FROM node:16.15.1-alpine

RUN mkdir -p /code/

WORKDIR /code

COPY ./public /code/
COPY ./src /code/
COPY package.json /code
COPY package-lock.json /code
COPY ./entrypoint.sh /code

RUN npm install
# RUN cd /code/apps/console_ui; npm run build; cd /code/apps/appstore_ui; npm run build

ENTRYPOINT ["sh", "entrypoint.sh"]

