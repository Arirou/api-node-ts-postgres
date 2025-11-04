// Importation du module Router d'Express pour gérer les routes
import {Router} from 'express';
// Importation des contrôleurs qui gèrent la logique métier pour les utilisateurs
import {getUsers} from '../controllers/user.controller';
// Création d'un routeur Express
const router = Router();
/**
 * Route GET /users
 * Description : Récupère la liste des utilisateurs
 * Contrôleur associé : getUsers (défini dans user.controller.ts)
 */
router.get('/', getUsers);
/**
 * Route POST /users
 * Description : Ajoute un nouvel utilisateur
 * Contrôleur associé : addUser (défini dans user.controller.ts)
 */
export default router;
// Exportation du routeur