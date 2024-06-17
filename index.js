import express from 'express'
import { connectionDB } from './DB/connection.js'
import * as allRouters from "./Modules/index.routes.js"

const app = express()
const port = 3000

app.use(express.json())
connectionDB()
app.use('/user' , allRouters.userRouter)
app.use('/msg' , allRouters.messageRouter)

app.get('/', (req, res) => res.send('Hello in Saraha App'))
app.listen(port , () => console.log(`Saraha app listening on port ${port}`))