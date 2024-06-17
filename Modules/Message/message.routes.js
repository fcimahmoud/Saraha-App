import { Router } from "express";
const router = Router()
import * as mc from "./message.controller.js"

router.get('/', (req, res) => {
    res.json({message: "message router"})
})

export default router