import { Response,Request,NextFunction } from "express"

// Package for checking verifying and signing JWT for user login
import jwt from 'jsonwebtoken'

export const assets = async (req: Request,res: Response, next: NextFunction) => {
      try {
            // check if cookie exists
            if(req.cookies.authToken) {

                  const authToken: string = await req.cookies.authToken!
                  
                  // Verifiy if the cookie that the client has is authentic
                  const decodedJwt = await jwt.verify(authToken,`8rA|N3yqpr7P*Am6RT8f4M=rw%CE=6uk`,(err,decoded) => {
                        if (!err){
                              next()
                        } else {
                              // If JWT is not authentic return a page with the a funny response
                              res.status(500)
                        }
                  })
                  
            // check if the client doesn't have any JWT for this site
            } else if (!req.cookies.authToken) {

                        // Render and return page with one of the funny message from the funny messages array
                        res.status(400)
            }
      } catch(error) {
            
            // If the server crashes or fail in any way return the login page with the error message
            res.status(500)
      }
}
