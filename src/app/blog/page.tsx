// cspell:ignore Ressources
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import Link from "next/link";
import { BookOpen, Calendar } from "lucide-react";
import { blogPosts } from "@/data/posts";

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
                    {blogPosts.map((post) => (
                        <div key={post.slug} className="border border-gray-200 rounded-lg p-8 bg-white mb-12 shadow-sm">
                            <div className="flex items-center gap-4 text-sm mb-6 text-gray-500">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium flex items-center gap-2">
                                    <BookOpen size={14} /> {post.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {new Date(post.date).toLocaleDateString("fr-FR")}
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold mb-6 text-gray-900" id={post.slug}>
                                {post.title}
                            </h2>

                            <div
                                className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    ))}

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center mt-8">
                        <p className="text-blue-800 font-medium">Bientôt plus d'articles !</p>
                    </div>

                    {/* Ad in content */}
                    <AdPlaceholder format="rectangle" className="mx-auto" />
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold mb-4 text-lg">À Propos</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            DevisFacile est un outil gratuit conçu pour aider les freelances français à gérer leur administratif simplement et sans frais.
                        </p>
                        <Link href="/generateur" className="btn btn-primary w-full text-center">
                            Créer un devis
                        </Link>
                    </div>
                    <AdPlaceholder format="sidebar" />
                </aside>
            </div>
        </div>
    );
}
