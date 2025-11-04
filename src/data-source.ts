// Importation de la classe DataSource depuis TypeORM pour gérer la connexion à la base de données
import {DataSource} from "typeorm";
// Importation de l'entité User qui représente la table "user" dans PostgreSQL
import {User} from "./entities/User";
import * as dotenv from "dotenv";

/**
 * AppDataSource
 * Objet représentant la connexion à la base de données PostgreSQL
 * Utilisé pour initialiser TypeORM et accéder aux repositories
 */
export const AppDataSource = new DataSource({
    // Type de base de données
    type: "postgres",
    // Adresse du serveur PostgreSQL
    host: process.env.DB_HOST,
    // Port d'écoute de PostgreSQL
    port: Number(process.env.DB_PORT),
    // Nom d'utilisateur pour se connecter à la base
    username: process.env.DB_USERNAME,
    // Mot de passe de l'utilisateur
    password: process.env.DB_PASSWORD,
    // Nom de la base de données à utiliser
    database: process.env.DB_DATABASE,
    // Synchronise automatiquement les entités avec la base (création des tables)
    synchronize: true,
    // Active ou désactive les logs SQL
    logging: false,
    // Liste des entités gérées par TypeORM
    entities: [User] as any,       // <-- force le type pour TypeScript afin d'éviter les erreurs
    // Liste des migrations (vide ici)
    migrations: [] as any,         // <-- idem
    // Liste des subscribers (vide ici)
    subscribers: [] as any,        // <-- idem
});
