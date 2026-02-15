import { Router } from "express";
import { getLibraries, createLibrary, getUserLibraries, deleteLibrary , updateLibrary , getLibraryDetails , searchLibraries} from "../controllers/libraryController.js";
import { authenticate } from "../middlewares/authMiddleware.js";


const router = Router();

// PUBLIC: Anyone can view the list of libraries
router.get('/', getLibraries);

// PROTECTED: Only logged-in users can create a library
// The 'authenticate' middleware runs first to verify the token
router.post('/', authenticate, createLibrary);
router.get('/my-libraries',authenticate , getUserLibraries);
router.delete('/:id',authenticate , deleteLibrary);
router.put('/:id',authenticate,updateLibrary);
router.get('/details/:libraryId', getLibraryDetails);
router.get('/search', searchLibraries);

export default router;