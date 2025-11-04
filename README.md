# API Node.js avec TypeScript et PostgreSQL

## Installation

1. Cloner le projet :
```bash
git clone <ton_repo>
```
2. Installer les dépendances :
```bash
npm install
```
3. Créer un fichier `.env` à la racine :
```env
PORT=4000
DB_HOST=localhost
DB_PORT="votre port"
DB_USERNAME="votre username"
DB_PASSWORD="votre mot de passe"
DB_DATABASE="votre nom de base"
```
4. Créer la base PostgreSQL locale avec le nom indiqué dans `.env`.

## Lancement du serveur

- Mode développement :
```bash
npm run dev
```
- Mode production (après compilation) :
```bash
npm run build
npm start
```

## Routes disponibles

| Méthode | Route       | Description                          |
|---------|------------|--------------------------------------|
| GET     | /users     | Récupère tous les utilisateurs       |
| POST    | /users     | Ajoute un nouvel utilisateur         |
| GET     | /users/:id | Récupère un utilisateur spécifique  |
| PUT     | /users/:id | Met à jour un utilisateur spécifique |
| DELETE  | /users/:id | Supprime un utilisateur spécifique  |