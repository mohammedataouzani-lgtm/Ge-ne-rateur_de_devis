// cspell:ignore Ressources
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata = {
    title: "Blog & Ressources - Devis Auto-Entrepreneur",
    description: "Conseils pour créer vos devis et gérer votre facturation.",
};

export default function BlogPage() {
    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-8">Ressources & Conseils</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-600">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Blog en construction</h2>
                        <p className="text-gray-600 max-w-md mx-auto">
                            Nos experts travaillent actuellement sur la rédaction d'articles pour vous aider à mieux gérer votre auto-entreprise. Revenez bientôt !
                        </p>
                    </div>

                    {/* Ad in content */}
                    <AdPlaceholder format="rectangle" className="mx-auto" />
                </div>

                {/* Sidebar */}
                <aside className="hidden lg:block space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-4">À Propos</h3>
                        <p className="text-sm text-gray-600">
                            DevisFacile est un outil gratuit conçu pour aider les freelances français à gérer leur administratif simplement.
                        </p>
                    </div>
                    <AdPlaceholder format="sidebar" />
                </aside>
            </div>
        </div>
    );
}
