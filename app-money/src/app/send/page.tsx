// components/SendMoneyForm.tsx
"use client";

import React from 'react';
import { useState } from 'react';

const SendMoneyForm = () => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Ici, vous pouvez ajouter la logique pour envoyer de l'argent avec les données du formulaire (recipient et amount)
        console.log('Envoi d\'argent à :', recipient, 'Montant :', amount);
        // Réinitialiser le formulaire après soumission
        setRecipient('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mt-10 mb-4">
                <label htmlFor="recipient" className="block text-gray-700 text-sm font-bold mb-2">Destinataire :</label>
                <input
                    type="text"
                    id="recipient"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nom du destinataire"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Montant :</label>
                <input
                    type="number"
                    id="amount"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Montant à envoyer"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Envoyer de largent
            </button>
        </form>
    );
};

export default SendMoneyForm;
