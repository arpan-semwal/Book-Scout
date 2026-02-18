import { Router } from "express";
import { getStats } from "../controllers/statsController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/owner-dashboard", authenticate, getStats);

export default router;