import express from "express";
import { addProblems } from "../controllers/problem.controller.js";

const router = express.Router()

router.post('/addproblems', addProblems)

export default router
