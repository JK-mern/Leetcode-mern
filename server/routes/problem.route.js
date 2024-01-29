import express from "express";
import { addProblems,getAllProblems,getProblem } from "../controllers/problem.controller.js";

const router = express.Router()

router.post('/addproblems', addProblems)
router.get('/all',getAllProblems)
router.get('/get/:title',getProblem)

export default router
