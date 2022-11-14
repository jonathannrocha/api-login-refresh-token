import { compare } from "bcrypt";
import { Request, Response } from "express";
import { ModelUser } from "../models/modelsUsers";
import { GenerateRefreshToken } from "../services/GenerateRefreshToken";
import { generateToken } from "../services/generateToken";

class Autenthicationcontroller {
  async handle(request: Request, response: Response) {

    const { userName, password } = request.body;

    const modelUser = new ModelUser()

    const msgError = 'User or Password  incorret!'

    const userAlreadyexist = await modelUser.findUniqueUserName(userName)

    if (!userAlreadyexist) throw new Error(msgError)

    const passwordMatch = await compare(password, userAlreadyexist.password)

    if (!passwordMatch) throw new Error(msgError)

    const token = await new generateToken().execute(userAlreadyexist.id)

    const tokenRefresh = await new GenerateRefreshToken().execute(userAlreadyexist.id)

    return response.json({ token, refreshtoken: tokenRefresh.id })
  }
}

export { Autenthicationcontroller }
