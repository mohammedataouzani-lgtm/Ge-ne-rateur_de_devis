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
                    {/* Article Card 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <BookOpen size={16} /> <span>Tutoriel</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-blue-600">
                                Les mentions obligatoires sur un devis en 2025
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Tout ce que vous devez savoir pour être en conformité avec la loi française.
                        </p>
                        <Link href="#" className="text-sm font-medium text-blue-600 hover:underlin">Lire la suite →</Link>
                    </div>

                    {/* Article Card 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <BookOpen size={16} /> <span>Gestion</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-blue-600">
                                Devis payant ou gratuit : que choisir ?
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Dans certains secteurs, il est d'usage de facturer le devis. Découvrez quand et comment le faire.
                        </p>
                        <Link href="#" className="text-sm font-medium text-blue-600 hover:underlin">Lire la suite →</Link>
                    </div>

                    {/* Ad in content */}
                    <AdPlaceholder format="rectangle" className="mx-auto" />

                    {/* Article Card 3 */}
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <BookOpen size={16} /> <span>Auto-Entrepreneur</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                            <Link href="#" className="hover:text-blue-600">
                                TVA non applicable : l'article 293 B du CGI expliqué
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Comprendre la franchise en base de TVA et comment l'indiquer correctement sur vos documents.
                        </p>
                        <Link href="#" className="text-sm font-medium text-blue-600 hover:underlin">Lire la suite →</Link>
                    </div>
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
