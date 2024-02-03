import express from "express";
import { addProblems,getAllProblems,getProblem } from "../controllers/problem.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verify.js"

const router = express.Router()

router.post('/addproblems',verifyUser,verifyAdmin,addProblems)
router.get('/all',getAllProblems)
router.get('/get/:title',verifyUser,getProblem)

export default router
