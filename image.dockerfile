FROM  node
WORKDIR /app
COPY . /app
RUN npm i --force
RUN npm run build
EXPOSE 5000
ENV HOST=0.0.0.0
CMD ["npm","run","expose"]
