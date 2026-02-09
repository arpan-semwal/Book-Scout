import { Router } from "express";
import { getLibraries, createLibrary, getUserLibraries } from "../controllers/libraryController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = Router();

// PUBLIC: Anyone can view the list of libraries
router.get('/', getLibraries);

// PROTECTED: Only logged-in users can create a library
// The 'authenticate' middleware runs first to verify the token
router.post('/', authenticate, createLibrary);
router.get('/my-libraries',authenticate , getUserLibraries);

export default router;