import "express-async-errors"
import Express, { Request, Response, NextFunction } from "express"
import path from "path"
import { userRouter } from "./routes"
import Cors from "cors"

const app = Express()

app.use(Cors())

app.use(Express.json())

app.use(Express.static(path.join(__dirname, '../public')))

app.use(userRouter)


app.use(
  (Error: Error, request: Request, respose: Response, next: NextFunction) => {

    return respose
      .status(400)
      .json({
        Status: "Error",
        Error: Error.message
      })
  })


export default app;

