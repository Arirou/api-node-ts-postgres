// Importation du framework Express et des types Request et Response
import express, {Request, Response} from 'express';
// Importation de dotenv pour charger les variables d'environnement depuis .env
import * as dotenv from 'dotenv';
// Importation des routes utilisateurs
import userRoutes from './routes/user.routes';
// Importation de la source de données PostgreSQL (TypeORM)
import {AppDataSource} from './data-source';

// Chargement des variables d'environnement
dotenv.config();

// Création de l'application Express
const app = express();

// Définition du port à partir du fichier .env
const PORT = process.env.PORT;

// Middleware pour parser le JSON dans les requêtes entrantes
app.use(express.json());

/**
 * Route GET /
 * Description : Route de test pour vérifier si le serveur fonctionne
 */
app.get('/', (req: Request, res: Response) => {
    res.send('API Node.js avec PostgreSQL fonctionne !');
});

// Montage des routes utilisateurs sous le chemin /users
app.use('/users', userRoutes);

/**
 * Initialisation de la connexion à la base de données PostgreSQL
 * Une fois la connexion établie, le serveur est lancé
 */
AppDataSource.initialize()
    .then(() => {
        console.log('✅ Base de données connectée');
        app.listen(PORT, () => console.log(`✅ Serveur démarré sur http://localhost:${PORT}`));
    })
    .catch((err) => console.error('❌ Erreur de connexion à la base', err));
