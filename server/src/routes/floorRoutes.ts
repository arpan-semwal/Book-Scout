import{Router} from "express"
import { authenticate } from "../middlewares/authMiddleware.js";
import { addFloor } from "../controllers/floorController.js";

const router = Router();

router.post('/:libraryId', authenticate, addFloor);

export default router;