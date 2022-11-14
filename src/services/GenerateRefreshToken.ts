import { Prisma } from "../../prisma/client";
import dayjs, { unix } from "dayjs"
import { expireInToken } from "../config/token";

class GenerateRefreshToken {

  async execute(userId: string) {

    const refTokenExits = await Prisma.refreshToken.findFirst({ where: { userId } })

    if (refTokenExits) {

      const expireIn = dayjs().isAfter(unix(refTokenExits.expireIn))

      if (!expireIn) {
        return refTokenExits

      }

      await Prisma.refreshToken.delete({
        where: {
          id: refTokenExits.id
        }
      })
    }

    const generateRefToken = await Prisma.refreshToken.create({
      data: {
        userId,
        expireIn: dayjs().add(expireInToken, 'M').unix()
      }
    })

    await Prisma.user.update({
      where: {
        id: userId
      },
      data: {
        refreshTokenId: generateRefToken.id
      }
    })

    return generateRefToken
  }
}

export { GenerateRefreshToken }