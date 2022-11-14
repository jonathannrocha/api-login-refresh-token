import { Router } from "express"
import { authMidd } from "./middlewares/authentication";
import { Autenthicationcontroller } from "./controllers/autenthication";
import { createUSerController } from "./controllers/creatUser";
import { ListUser } from "./controllers/listUser"
import { refreshtoken } from "./controllers/refreshtoken";
const userRouter = Router();

const createUserUseCaseController = new createUSerController()
const autenthicationUser = new Autenthicationcontroller()
const authenticationMiddlewares = new authMidd().ensureAuthenticated
const listUser = new ListUser()
const generateRefreshtoken = new refreshtoken().handle

userRouter.post('/register', createUserUseCaseController.handle)
userRouter.post('/login', autenthicationUser.handle)
userRouter.get('/User/list', authenticationMiddlewares, listUser.list)
userRouter.post('/refresh-token', generateRefreshtoken, listUser.list)


export { userRouter }