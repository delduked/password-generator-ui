FROM golang:alpine3.14 AS stage1
WORKDIR /app
COPY . /app
RUN go mod download
RUN go get -v
RUN go build -o /app/main

FROM alpine:latest
WORKDIR /app
COPY --from=stage1 /app/main /app/main
COPY --from=stage1 /app/views/ /app/views/
COPY --from=stage1 /app/routes/ /app/routes/
COPY --from=stage1 /app/assets/ /app/assets/
EXPOSE 5000
CMD ["./main"]
