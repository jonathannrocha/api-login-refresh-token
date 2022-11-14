import { Prisma } from "../../prisma/client";

class ModelUser {

  async findUniqueUserName(userName: string) {
    return await Prisma.user.findFirst({
      where: {
        userName
      }
    })


  }

  async getManyUsers() {
    return await Prisma.user.findMany()
  }

  async createUser({
    name,
    userName,
    password,
    telefone,
    cpf
  }) {
    return await Prisma.user.create({
      data: {
        name,
        userName,
        password,
        telefone,
        cpf
      }
    })
  }
}

export { ModelUser }