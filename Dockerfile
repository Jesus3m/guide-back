FROM node:16.14.2
ENV NODE_ENV=development

WORKDIR /app/company

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install --silent

COPY . .
EXPOSE 5000
RUN npm run build
CMD [ "yarn", "start" ]