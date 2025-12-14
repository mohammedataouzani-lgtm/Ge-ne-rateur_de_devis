import QuoteForm from "@/components/quote-generator/QuoteForm";

export const metadata = {
    title: "Créer un Devis Gratuit - Devis Express",
    description: "Générez votre devis PDF gratuit et conforme en 3 étapes.",
};

export default function GeneratorPage() {
    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <h1 className="mb-6 text-2xl font-bold">Nouveau Devis</h1>
            <QuoteForm />
        </div>
    );
}
