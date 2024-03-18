import express from 'express'
import { verifyUser } from '../utils/verify.js'
import { deleteUser, updateUser } from '../controllers/user.controller.js'

const router = express.Router()

router.delete('/delete/:id', verifyUser, deleteUser)
router.put('/update/:id',verifyUser, updateUser)

export default router