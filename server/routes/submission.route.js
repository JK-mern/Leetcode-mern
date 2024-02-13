import express from 'express'
import { getSolution, submitSolution } from '../controllers/submit.controller.js'
import { verifyUser } from '../utils/verify.js'

const router = express.Router()

router.post('/submitSolution',verifyUser,submitSolution)
router.get('/getSolution/:questionId/:lang',verifyUser,getSolution)

export default router