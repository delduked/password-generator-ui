FROM node:14.16
COPY . .
WORKDIR /
EXPOSE 80
RUN npm i
CMD ["node","dist/index.js"]