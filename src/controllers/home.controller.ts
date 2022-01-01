import { Response,Request,NextFunction } from "express"
import random from "random"

// Package for checking verifying and signing JWT for user login
import jwt from 'jsonwebtoken'

export const home = async (req: Request,res: Response, next: NextFunction) => {
      try {
            // check if cookie exists
            if(req.cookies.authtoken) {

                  const authToken: string = await req.cookies.authtoken!

                  // Verifiy if the cookie that the client has is authentic
                  const decodedJwt = await jwt.verify(authToken,"secret",(err,decoded) => {
                        if (!err){
                              // If the JWT is authentic continue to the next step which would be in stream.controller.ts
                              res.status(200).render('index/index')
                        } else {
                              // If JWT is not authentic return a page with the a funny response
                              res.status(500).render('signin/index',{message:"You must renew your credentials my guy."})
                        }
                  })
                  
                  
            // check if the client doesn't have any JWT for this site
            } else if (!req.cookies.authtoken) {
                        // Array of funny responses
                        const questions: string[] = await ['Login my Guy!','Shall you pass?','login dawg?','sign in brah.','Are you going to sign in?','Why you no login?']

                        // Render and return page with one of the funny message from the funny messages array
                        res.status(400).render('signin/index',{message: questions[random.int((0),(5))]})
            }
      } catch(error) {
            
            // If the server crashes or fail in any way return the login page with the error message
            res.status(500).render('signin/index',{message: error})
      }
}
