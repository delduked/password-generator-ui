# Nateflix Live Stream

Custom live stream website with JWT Login page. Server side rendering is run by nodejs while all code is compiled from TypeScript to JavaScript.

## API
### POST request route `/auth/verfiy`
One single post request route on the server side handles username and password authentication. `/auth/verify` If the username and password is correct than the response from the post request `/auth/verify` will reply with json response `{message:'reload'}` to signify to the client that the correct credentials have been passed from the front end client, to the backend and then to the front end. Once the response has been received on the front where the response is equal to `reload`, the javascript in the client will reload the page. The Response not only container a json response but also a signed JWT in a cookie named `authtoken` where the upon reload of the main page, the back end will conditonally load the main page `./dist/views/index/index.pug` because the client would now have a signed JWT.

### Main GET route `/`
The main route conditionally redners a `pug` template engine based on whether or not the client has a cookie named `authtoken`. If `authtoken` exists and is authentic, middle ware on the main route will verifiy the newly retrieve JWT in the cookie and if authentic will render the page `./dist/views/index/index.pug`.

## Docker
### login page
In the various docker files, their is an image file `stream.dockerfile` and a compose file `docker-compose.yml`. In order to start the environment run the following command 

```docker
docker-compose up -d --force-recreate
```

>`--force-recreate` is not necessary but it helps to avoid caching issues

The above command will build the docker containers with setting applied in the `docker-compose.yml` and the compose file will refer to the image file `stream.dockerfile` to build the image for the container with all of the typescript files.

### RTMP Server
The stream feed is sent by OBS to the RTMP docker container. To start the rtmp docker container run the following command

```docker
docker run --name nms -d -p 1935:1935 -p 4436:8000 -p 8443:8443 illuspas/node-media-server
```

RTMP's default port is `1935` and the admin page for the RTMP server is by default on port `8000`. For my own setup I changed the outside ports for the containers. If you want to run everything default run the following command

```docker
docker run --name nms -d -p 1935:1935 -p 8000:8000 -p 8443:8443 illuspas/node-media-server
```

To get a live output of the rtmp server run the following command on your docker host.

```docker
docker logs nms -f
```

To remove docker container along with deleting the docker image.

```docker
docker-compose down --rmi all
```

## MongoDB
To list database the site is currently using type

```javascript
use nateflix
db.users.find()
```

To enter mongo shell type `mongo`

To remove users type

```javascript
db.users.remove({__v:0})
```