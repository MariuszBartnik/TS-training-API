import { Router } from 'express';
import postController from '../controllers/postController';

const router = Router();

router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPost);
router.post('/posts', postController.addPost);
router.put('/posts/:id', postController.editPost);
router.delete('/posts/:id', postController.deletePost);
router.get('/user-posts/:id', postController.getUserPost);

export default router;
