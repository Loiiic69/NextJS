// pages/api/sendMoney.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

// Configurer votre pool de connexion PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Récupérer les données du formulaire depuis la requête
            const { recipient, amount } = req.body;

            // Vérifier les données, effectuer les validations nécessaires ici

            // Insérer les données dans la base de données PostgreSQL
            const client = await pool.connect();
            await client.query('INSERT INTO transactions (recipient, amount) VALUES ($1, $2)', [recipient, amount]);
            client.release();

            // Envoyer une réponse réussie
            res.status(200).json({ message: 'Données envoyées avec succès à la base de données PostgreSQL.' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à la base de données PostgreSQL:', error);
            res.status(500).json({ message: 'Une erreur est survenue lors de l\'envoi des données.' });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée. Utilisez la méthode POST.' });
    }
}
