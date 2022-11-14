import dotEnv from "dotenv"

dotEnv.config()

export const expireInToken = parseInt(process.env.EXPIRE_TOKEN)
export const expireRefreshToken = process.env.EXPIRE_REFRESH_TOKEN

