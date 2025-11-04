// Importation des décorateurs TypeORM pour définir les entités et colonnes
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

/**
 * Entité User
 * Représente la table "user" dans la base de données PostgreSQL
 */
@Entity()
export class User {
    /**
     * Colonne id
     * Clé primaire auto-générée
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * Colonne name
     * Stocke le nom de l'utilisateur
     */
    @Column()
    name: string;

    /**
     * Colonne email
     * Stocke l'email de l'utilisateur
     */
    @Column()
    email: string;
}
