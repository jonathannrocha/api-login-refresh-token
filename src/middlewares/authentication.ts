import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

class authMidd {

  async ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const token = request.headers.authorization

    if (!token)
      return response
        .status(401)
        .json({ status: 'token invalid!' })

    try {
      verify(
        token.split(' ')[1],
        process.env.SECRETKEY
      )

    } catch (error) {
      return response
        .status(401)
        .json({ status: "token invalid" })
    }

    return next()
  }
}

export { authMidd }