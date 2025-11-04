import { Router } from 'express';
import { getUsers, addUser, getUserById, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.post('/', addUser);

/**
 * Route GET /users/:id
 * Description : Récupère un utilisateur spécifique
 */
router.get('/:id', getUserById);

/**
 * Route PUT /users/:id
 * Description : Met à jour un utilisateur spécifique
 */
router.put('/:id', updateUser);

/**
 * Route DELETE /users/:id
 * Description : Supprime un utilisateur spécifique
 */
router.delete('/:id', deleteUser);

export default router;
