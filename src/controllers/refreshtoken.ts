import dayjs, { unix } from "dayjs";
import { Request, Response } from "express"
import { Prisma } from "../../prisma/client";
import { generateToken } from "../services/generateToken"

class refreshtoken {

  async handle(request: Request, response: Response) {

    const { refreshtoken } = request.body

    if (!refreshtoken) throw new Error("refresh token expired")


    const refToken = await Prisma.refreshToken.findFirst({
      where: { id: refreshtoken }
    })


    if (!refToken) throw new Error("refresh token expired")

    const expireIn = dayjs().isAfter(unix(refToken.expireIn))

    if (expireIn) throw new Error("refresh token expired")

    const token = await new generateToken().execute(refToken.userId)

    return response.json({ token })
  }
}

export { refreshtoken }