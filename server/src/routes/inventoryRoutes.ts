import { Router } from 'express';
import * as inventoryController from '../controllers/inventoryController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

// POST /api/inventory/library/5/add
router.post('/library/:id/add', authenticate, inventoryController.addBook);

export default router;