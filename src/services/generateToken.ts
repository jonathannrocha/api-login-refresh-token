import { sign } from "jsonwebtoken"
import dotenv from "dotenv"
import { expireInToken } from "../config/token"


dotenv.config()

class generateToken {

  async execute(id: string) {

    const token = sign(
      {},
      process.env.SECRETKEY,
      {
        subject: id,
        expiresIn: expireInToken,
      }
    )
    return token
  }
}

export { generateToken }