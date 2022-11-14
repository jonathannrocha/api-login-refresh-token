import { Request, Response } from "express"
import { validatorCpf } from "../utils/validatorCpf"
import { ModelUser } from "../models/modelsUsers"
import { hash } from "bcrypt"
import { generateToken } from "../services/generateToken"
import { GenerateRefreshToken } from "../services/GenerateRefreshToken"

class createUSerController {
  async handle(req: Request, res: Response) {

    const { name, userName, password, telefone, cpf } = req.body

    const legitimizeCpf = new validatorCpf().treatemntCpf(cpf)
    const error = 'Data invalid!'

    if (!password) throw new Error(error)


    if (!legitimizeCpf) throw new Error(error)


    if (!name && !userName) throw new Error(error)

    const modelUser = new ModelUser()

    const userAlreadyExist = await modelUser.findUniqueUserName(userName)

    if (userAlreadyExist) throw new Error('user already exists!')

    const passwordHash = await hash(password, 8)

    const newUser = await modelUser.createUser({
      name,
      userName,
      password: passwordHash,
      telefone: telefone.replace(/[^\d]+/g, ''),
      cpf: cpf.replace(/[^\d]+/g, '')
    })

    const token = await new generateToken().execute(newUser.id)
    const refreshToken = await new GenerateRefreshToken().execute(newUser.id)
    return res
      .json({ id: newUser.id, token: token, refreshToken })
  }
}

export { createUSerController }