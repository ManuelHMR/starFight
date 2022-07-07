import express from "express";

import { validateSchema } from "../middlewares/validateSchema.js";
import battleSchema from "../schemas/index.js";
import { getRanking, postBattle } from "../controllers/controllers.js";

const router = express.Router();

router.post("/battle", validateSchema(battleSchema), postBattle)
router.get("/ranking", getRanking)

export default router;