import { ModelUser } from "../models/modelsUsers"
import { Request, Response } from "express";

const modelUser = new ModelUser()

export class ListUser {
  async list(resquest: Request, response: Response) {

    const list = await modelUser.getManyUsers()
    return response.json({ list })
  }
}