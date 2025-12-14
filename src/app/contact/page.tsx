"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate network request
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="container py-20 text-center max-w-lg">
                <div className="bg-green-50 text-green-700 p-8 rounded-2xl mb-8">
                    <CheckCircle size={48} className="mx-auto mb-4" />
                    <h1 className="text-2xl font-bold mb-2">Message envoyé !</h1>
                    <p>Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-blue-600 hover:underline"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <div className="container py-12 max-w-2xl">
            <h1 className="text-3xl font-bold mb-2">Nous contacter</h1>
            <p className="text-gray-600 mb-8">
                Une question, une suggestion ou un problème ? N'hésitez pas à nous écrire.
            </p>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Nom complet</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Votre nom"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="vous@exemple.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                        <select
                            id="subject"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        >
                            <option>Question générale</option>
                            <option>Support technique</option>
                            <option>Suggestion d'amélioration</option>
                            <option>Partenariat</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Comment pouvons-nous vous aider ?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full btn btn-primary flex items-center justify-center gap-2 py-3"
                    >
                        {status === "submitting" ? (
                            "Envoi en cours..."
                        ) : (
                            <>
                                <Send size={18} /> Envoyer le message
                            </>
                        )}
                    </button>
                </form>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                <p className="flex items-center justify-center gap-2">
                    <Mail size={16} /> matwam@gmail.com
                </p>
            </div>
        </div>
    );
}
