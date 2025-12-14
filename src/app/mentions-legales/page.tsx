export const metadata = {
    title: "Mentions Légales - DevisFacile",
    description: "Mentions légales et politique de confidentialité.",
};

export default function LegalPage() {
    return (
        <div className="container py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Éditeur du site</h2>
                <p className="text-gray-700">
                    Le site DevisFacile est édité à titre personnel.<br />
                    Contact : matwam@gmail.com
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Hébergement</h2>
                <p className="text-gray-700">
                    Ce site est hébergé par Vercel Inc.<br />
                    440 N Barranca Ave #4133<br />
                    Covina, CA 91723<br />
                    États-Unis
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Propriété intellectuelle</h2>
                <p className="text-gray-700">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Données personnelles</h2>
                <p className="text-gray-700">
                    Ce site n'utilise pas de base de données backend pour stocker vos devis. Toutes les données saisies restent dans votre navigateur (local state) le temps de la génération du PDF. Nous ne collectons aucune donnée personnelle issue de vos devis.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Cookies & Publicité</h2>
                <p className="text-gray-700">
                    Nous utilisons des cookies pour améliorer l'expérience utilisateur et afficher des publicités pertinentes via nos partenaires. Vous pouvez gérer vos préférences à tout moment.
                </p>
            </section>
        </div>
    );
}
