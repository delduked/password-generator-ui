// Import dependencies
import express, { Application, Request, Response } from "express";
import site from "./routes/site";
import morgan from 'morgan'
import cookieParser from "cookie-parser";
import cors from 'cors'
import * as path from 'path'

// This will be the main application to run the entire site
const app: Application = express()

app.set('port',80)

// PUG Template engine to dynamically render page server side
app.set('view engine', 'pug');
app.set("views",path.join(__dirname,'../views'))

app.use(cookieParser())
app.use(cors({exposedHeaders:'*'}))

//make sure json is acccepted
app.use(express.json())
app.use(morgan('dev'))

// Main route for the live stream
app.use('/',site)

// Route for grabbing logo
app.use('/logo.png',(req:Request,res: Response) =>{
      res.sendFile(path.join(__dirname,'../views/index/logo.png'));
})


export default app