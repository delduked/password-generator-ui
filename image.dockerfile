FROM  node:latest
WORKDIR /svelte
COPY . /svelte
RUN npm i
EXPOSE 5000
CMD ["npm","run","start"]
