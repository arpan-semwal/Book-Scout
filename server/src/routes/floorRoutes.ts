import{Router} from "express"
import { authenticate } from "../middlewares/authMiddleware.js";
import { addFloor , addPricingPlan } from "../controllers/floorController.js";

const router = Router();

router.post('/:libraryId', authenticate, addFloor);
router.post('/pricing/:floorId', authenticate, addPricingPlan);

export default router;