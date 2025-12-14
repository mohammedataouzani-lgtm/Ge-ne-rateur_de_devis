export const metadata = {
    title: "Foire Aux Questions - Devis Auto-Entrepreneur",
    description: "Réponses à vos questions sur la facturation, les mentions obligatoires et l'utilisation de notre générateur.",
};

export default function FAQPage() {
    return (
        <div className="container py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Foire Aux Questions</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3">Est-ce vraiment gratuit ?</h2>
                    <p className="text-gray-700">
                        Oui, l'utilisation du générateur de devis est totalement gratuite. Le site est financé par les publicités affichées sur les pages (mais jamais sur vos PDF).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">Les devis sont-ils conformes à la loi française ?</h2>
                    <p className="text-gray-700">
                        Oui, notre modèle inclut toutes les mentions obligatoires : date, numéro de devis, identité de l'entreprise (SIRET, adresse), identité du client, détails des prestations (HT/TVA/TTC), et durée de validité.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">Dois-je m'inscrire pour créer un devis ?</h2>
                    <p className="text-gray-700">
                        Non, aucune inscription n'est nécessaire. Vous remplissez le formulaire et téléchargez votre PDF directement. Aucune donnée n'est stockée sur nos serveurs pour votre confidentialité.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">Puis-je modifier le taux de TVA ?</h2>
                    <p className="text-gray-700">
                        Absolument. Vous pouvez choisir parmi les taux standards (20%, 10%, 5.5%, 2.1%) ou cocher la case "Exonération de TVA" si vous êtes auto-entrepreneur (article 293 B du CGI).
                    </p>
                </section>
            </div>
        </div>
    );
}
