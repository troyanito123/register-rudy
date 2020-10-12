import { Router } from 'express';
import userRoutes from './user_route';
import registerRoutes from './register_route';

const router = Router();

router.use('/user', userRoutes);
router.use('/register', registerRoutes);

export default router;
