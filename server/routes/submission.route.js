import express from 'express'
import { submitSolution } from '../controllers/submit.controller.js'
import { verifyUser } from '../utils/verify.js'

const router = express.Router()

router.post('/submitSolution',verifyUser,submitSolution)

export default router