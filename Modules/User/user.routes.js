import { Router } from "express";
const router = Router()
import * as uc from "./user.controller.js"

router.post ('/addUser', uc.addUser)
router.get('/getUser/:id', uc.getUser)
router.get('/getAllUsers', uc.getAllUsers)

export default router