"use client";

import { useState, useEffect } from "react";
import { QuoteData, Company, Client, QuoteItem, QuoteSettings } from "@/types/quote";
import styles from "./QuoteForm.module.css";
import { ChevronRight, ChevronLeft, Save } from "lucide-react";
// Components
import CompanyStep from "./CompanyStep";
import ClientStep from "./ClientStep";
import ItemsStep from "./ItemsStep";
import SettingsStep from "./SettingsStep";
import LivePreview from "./LivePreview";

const initialQuote: QuoteData = {
    id: "",
    company: { name: "", address: "", siret: "", email: "", phone: "" },
    client: { name: "", address: "", email: "" },
    items: [{ id: "1", description: "Prestation de services", quantity: 1, unitPrice: 500, vatRate: 20 }],
    settings: {
        date: new Date().toISOString().split('T')[0],
        validityDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        quoteNumber: `DEV-${new Date().getFullYear()}-001`,
        currency: "EUR",
        terms: "TVA non applicable, art. 293 B du CGI",
        isVatExempt: false,
    },
    totalHT: 0,
    totalTVA: 0,
    totalTTC: 0,
};

export default function QuoteForm() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<QuoteData>(initialQuote);
    const [quoteCount, setQuoteCount] = useState(0);

    // Load quote count from localStorage on mount
    useEffect(() => {
        const count = localStorage.getItem('quoteCount');
        setQuoteCount(count ? parseInt(count, 10) : 0);
    }, []);

    const calculateTotals = (items: QuoteItem[], isVatExempt: boolean) => {
        const totalHT = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
        const totalTVA = isVatExempt
            ? 0
            : items.reduce((acc, item) => acc + (item.quantity * item.unitPrice * (item.vatRate / 100)), 0);
        return {
            totalHT,
            totalTVA,
            totalTTC: totalHT + totalTVA
        };
    };

    useEffect(() => {
        const totals = calculateTotals(data.items, data.settings.isVatExempt);
        setData(prev => ({ ...prev, ...totals }));
    }, [data.items, data.settings.isVatExempt]);

    const updateCompany = (company: Company) => setData({ ...data, company });
    // Placeholders for other updaters

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const generatePDF = async () => {
        try {
            const { pdf } = await import('@react-pdf/renderer');
            // Import template dynamically or ensure it is standard import if client-side only
            const PDFTemplate = (await import('./PDFTemplate')).default;

            const blob = await pdf(<PDFTemplate data={data} />).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `devis-${data.settings.quoteNumber}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Track quote generation
            // 1. Google Analytics event
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'generate_quote', {
                    event_category: 'Quote',
                    event_label: data.settings.quoteNumber,
                    value: Math.round(data.totalTTC)
                });
            }

            // 2. Increment localStorage counter
            const newCount = quoteCount + 1;
            localStorage.setItem('quoteCount', newCount.toString());
            setQuoteCount(newCount);
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Une erreur est survenue lors de la génération du PDF.");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                {/* Quote Counter Badge */}
                {quoteCount > 0 && (
                    <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>📊</span>
                        <span>{quoteCount} devis généré{quoteCount > 1 ? 's' : ''}</span>
                    </div>
                )}
                {/* ... steps ... */}
                <div className={styles.steps}>
                    <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1. Entreprise</div>
                    <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2. Client</div>
                    <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3. Prestations</div>
                    <div className={`${styles.step} ${step >= 4 ? styles.active : ''}`}>4. Finalisation</div>
                </div>

                <div className={styles.content}>
                    {step === 1 && (
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-4">Mes Informations</h3>
                            <CompanyStep data={data.company} onChange={updateCompany} />
                        </div>
                    )}
                    {step === 2 && (
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-4">Informations Client</h3>
                            <ClientStep data={data.client} onChange={(client) => setData({ ...data, client })} />
                        </div>
                    )}
                    {step === 3 && (
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-4">Prestations & Produits</h3>
                            <ItemsStep
                                items={data.items}
                                onChange={(items) => setData({ ...data, items })}
                                currency={data.settings.currency}
                            />
                        </div>
                    )}
                    {step === 4 && (
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-4">Finalisation & Options</h3>
                            <SettingsStep
                                settings={data.settings}
                                onChange={(settings) => setData({ ...data, settings })}
                            />
                        </div>
                    )}
                </div>

                <div className={styles.actions}>
                    {step > 1 && (
                        <button onClick={prevStep} className="btn btn-outline">
                            <ChevronLeft size={16} /> Précédent
                        </button>
                    )}
                    {step < 4 ? (
                        <button onClick={nextStep} className="btn btn-primary">
                            Suivant <ChevronRight size={16} />
                        </button>
                    ) : (
                        <button onClick={generatePDF} className="btn btn-primary" style={{ backgroundColor: 'var(--success)' }}>
                            Télécharger PDF <Save size={16} style={{ marginLeft: 8 }} />
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.previewContainer}>
                <div className={styles.placeholderPreview}>
                    <LivePreview data={data} />
                </div>
            </div>
        </div>
    );
}
