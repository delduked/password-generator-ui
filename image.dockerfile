FROM  node
WORKDIR /svelte
COPY . /svelte
RUN npm i
EXPOSE 5000
ENV HOST=0.0.0.0
CMD ["npm","run","dev"]
