import { blogPosts } from "@/data/posts";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";



// Generate metadata for SEO
// Generate metadata for SEO
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return;

    return {
        title: `${post.title} - Blog DevisFacile`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container py-12 max-w-4xl">
            <Link
                href="/blog"
                className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
            >
                <ArrowLeft size={20} className="mr-2" /> Retour aux articles
            </Link>

            <article>
                <header className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar size={16} /> {new Date(post.date).toLocaleDateString("fr-FR")}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                        {post.title}
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        {/* Article Content */}
                        <div
                            className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <AdPlaceholder format="rectangle" className="mx-auto" />
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                            <h3 className="font-bold text-lg mb-4">À propos de l'auteur</h3>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                    <User size={24} />
                                </div>
                                <div className="text-sm">
                                    <p className="font-medium">Équipe DevisFacile</p>
                                    <p className="text-gray-500">Experts en gestion pour auto-entrepreneurs.</p>
                                </div>
                            </div>
                            <Link href="/generateur" className="btn btn-primary w-full text-center">
                                Créer un devis gratuit
                            </Link>
                        </div>
                        <AdPlaceholder format="sidebar" />
                    </aside>
                </div>
            </article>
        </div>
    );
}
