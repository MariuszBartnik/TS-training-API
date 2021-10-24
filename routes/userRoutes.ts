import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.get('/profiles', userController.getProfiles);
router.get('/profiles/:id', userController.getProfile);
router.get('/profile-details/:id', userController.getProfileDetails);

export default router;
