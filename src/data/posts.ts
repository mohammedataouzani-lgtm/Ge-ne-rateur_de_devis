export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    content: string; // Using simple HTML for now to keep it lightweight
}

export const blogPosts: BlogPost[] = [
    {
        slug: "mentions-obligatoires-devis-2025",
        title: "Les Mentions Obligatoires sur un Devis en 2025",
        excerpt: "Tout ce que vous devez savoir pour éditer des devis conformes à la loi française en tant qu'auto-entrepreneur. Évitez les amendes !",
        date: "2025-01-15",
        category: "Tutoriel",
        content: `
            <p>En tant qu'auto-entrepreneur, vos devis doivent respecter des règles strictes pour être valables. Un devis incomplet peut entraîner des litiges avec vos clients ou même des amendes en cas de contrôle.</p>
            
            <h2>1. Les informations sur votre entreprise</h2>
            <p>Votre devis doit clairement identifier qui vous êtes :</p>
            <ul>
                <li>Votre <strong>nom et prénom</strong> (ou dénomination sociale)</li>
                <li>Votre <strong>adresse professionnelle</strong></li>
                <li>Votre <strong>numéro SIRET</strong></li>
                <li>La mention <strong>"Entrepreneur Individuel"</strong> ou les initiales "EI" (depuis mai 2022)</li>
            </ul>

            <h2>2. Les informations sur le client</h2>
            <p>Vous devez également identifier à qui s'adresse le devis :</p>
            <ul>
                <li>Le nom du client (ou raison sociale)</li>
                <li>Son adresse complète</li>
            </ul>

            <h2>3. Le détail des prestations</h2>
            <p>C'est le cœur du devis. Il doit être précis pour éviter tout malentendu :</p>
            <ul>
                <li>Date du devis et <strong>durée de validité</strong> de l'offre</li>
                <li>Description détaillée de chaque prestation ou produit</li>
                <li>Quantité et prix unitaire hors taxe (HT)</li>
                <li>Le montant total à payer (HT et TTC)</li>
            </ul>

            <h2>4. La TVA (Taxe sur la Valeur Ajoutée)</h2>
            <p>Si vous bénéficiez de la franchise en base de TVA (ce qui est le cas de la majorité des auto-entrepreneurs débutants), vous ne facturez pas la TVA.</p>
            <p>⚠️ <strong>Mention OBLIGATOIRE à faire apparaître :</strong><br />
            <em>"TVA non applicable, art. 293 B du CGI"</em></p>
            <p>Si vous êtes redevable de la TVA, vous devez indiquer le taux appliqué (20%, 10%, etc.) et le montant correspondant.</p>

            <h2>5. Les mentions spécifiques</h2>
            <p>Selon votre activité, d'autres mentions peuvent être requises :</p>
            <ul>
                <li><strong>Artisans :</strong> Mention de l'assurance décennale (nom de l'assureur, couverture géographique).</li>
                <li><strong>Date de début et fin :</strong> Ou date de livraison estimée.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Utiliser un modèle conforme ou un générateur automatique comme <strong>DevisFacile</strong> vous assure de n'oublier aucune de ces mentions et de projeter une image professionnelle à vos clients.</p>
        `
    }
];
