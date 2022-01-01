import { Response,Request } from "express"

export const signup = async (req: Request,res: Response) => {

      // Final step to render and serve the live stream page to the client
      res.status(200).render('signup/index')
}

