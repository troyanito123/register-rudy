import { Router } from 'express';
import { create, getAll, update, remove, getOne, search } from '../controllers/register_controller';

const router =  Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', remove);
router.get('/search/:term', search);

export default router;
