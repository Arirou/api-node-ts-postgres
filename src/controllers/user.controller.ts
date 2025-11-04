// Importation des types Request et Response depuis Express
import { Request, Response } from 'express';
// Importation de la source de données TypeORM
import { AppDataSource } from '../data-source';
// Importation de l'entité User
import { User } from '../entities/User';

/**
 * Route GET /users
 * Description : Récupère tous les utilisateurs
 * @param req - Objet représentant la requête HTTP
 * @param res - Objet permettant d'envoyer une réponse HTTP
 */
export const getUsers = async (req: Request, res: Response) => {
    const userRepo = AppDataSource.getRepository(User); // On récupère le repository User
    const users = await userRepo.find(); // On récupère tous les utilisateurs
    res.json({ users }); // On renvoie la liste en JSON
};

/**
 * Route POST /users
 * Description : Ajoute un nouvel utilisateur
 * @param req - Objet représentant la requête HTTP contenant name et email
 * @param res - Objet permettant d'envoyer une réponse HTTP
 */
export const addUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Nom et email requis" });
    }

    const userRepo = AppDataSource.getRepository(User);
    const user = userRepo.create({ name, email }); // Création d'une nouvelle instance User
    await userRepo.save(user); // Sauvegarde en base

    res.json({ message: `Utilisateur ${name} ajouté avec succès !`, user });
};

/**
 * Route GET /users/:id
 * Description : Récupère un utilisateur spécifique par son id
 * @param req - Objet représentant la requête HTTP avec param id
 * @param res - Objet permettant d'envoyer une réponse HTTP
 */
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: parseInt(id) });

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json({ user });
};

/**
 * Route PUT /users/:id
 * Description : Met à jour un utilisateur existant
 * @param req - Objet représentant la requête HTTP avec param id et body avec données à modifier
 * @param res - Objet permettant d'envoyer une réponse HTTP
 */
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: parseInt(id) });

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    user.name = name || user.name; // On met à jour si une nouvelle valeur est fournie
    user.email = email || user.email;

    await userRepo.save(user); // Sauvegarde des modifications

    res.json({ message: "Utilisateur mis à jour avec succès !", user });
};

/**
 * Route DELETE /users/:id
 * Description : Supprime un utilisateur par son id
 * @param req - Objet représentant la requête HTTP avec param id
 * @param res - Objet permettant d'envoyer une réponse HTTP
 */
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: parseInt(id) });

    if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    await userRepo.remove(user); // Suppression en base

    res.json({ message: "Utilisateur supprimé avec succès !" });
};
