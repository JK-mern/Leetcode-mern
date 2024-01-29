import express from "express";
import { addProblems,getAllProblems } from "../controllers/problem.controller.js";

const router = express.Router()

router.post('/addproblems', addProblems)
router.get('/all',getAllProblems)

export default router
