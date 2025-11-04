// Importation d'Express et de ses types
import express, { Request, Response } from 'express';
// Importation pour charger les variables d'environnement depuis .env
import * as dotenv from 'dotenv';
// Importation du routeur utilisateurs
import userRoutes from './routes/user.routes';
// Importation de la datasource pour PostgreSQL
import { AppDataSource } from './data-source';

// Charge les variables d'environnement
dotenv.config();

// Création de l'application Express
const app = express();
// Récupération du port depuis .env ou défaut 3000
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON dans les requêtes entrantes
app.use(express.json());

// Route racine pour tester que le serveur fonctionne
app.get('/', (req: Request, res: Response) => {
    res.send('API Node.js avec PostgreSQL fonctionne !');
});

// Montage du routeur utilisateurs sur /users
app.use('/users', userRoutes);

// Initialisation de la connexion à PostgreSQL avant de démarrer le serveur
AppDataSource.initialize()
    .then(() => {
        console.log('✅ Base de données connectée');
        // Démarrage du serveur
        app.listen(PORT, () => console.log(`✅ Serveur démarré sur http://localhost:${PORT}`));
    })
    .catch((err) => console.error('❌ Erreur de connexion à la base', err));
