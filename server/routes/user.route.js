import express from 'express'
import { verifyUser } from '../utils/verify.js'
import { deleteUser } from '../controllers/user.controller.js'

const router = express.Router()

router.delete('/delete/:id', verifyUser, deleteUser)

export default router