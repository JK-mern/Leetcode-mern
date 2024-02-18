import express from "express";
import { addProblems,getAllProblems,getProblem, searchPattern } from "../controllers/problem.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verify.js"

const router = express.Router()

router.post('/addproblems',verifyUser,verifyAdmin,addProblems)
router.get('/all',getAllProblems)
router.get('/get/:title',verifyUser,getProblem)
router.get('/search',searchPattern)

export default router
