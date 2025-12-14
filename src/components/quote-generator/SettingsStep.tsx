import { QuoteSettings } from "@/types/quote";
import styles from "./QuoteForm.module.css";

interface Props {
    settings: QuoteSettings;
    onChange: (settings: QuoteSettings) => void;
}

export default function SettingsStep({ settings, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        onChange({ ...settings, [name]: val });
    };

    return (
        <div className="space-y-4">
            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Date d'émission</label>
                    <input
                        type="date"
                        name="date"
                        value={settings.date}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Date de validité</label>
                    <input
                        type="date"
                        name="validityDate"
                        value={settings.validityDate}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Numéro de devis</label>
                    <input
                        type="text"
                        name="quoteNumber"
                        value={settings.quoteNumber}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Devise</label>
                    <select
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                        className={styles.input}
                    >
                        <option value="EUR">Euro (€)</option>
                        <option value="USD">Dollar ($)</option>
                        <option value="GBP">Livre (£)</option>
                    </select>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        name="isVatExempt"
                        checked={settings.isVatExempt}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">Exonération de TVA (Auto-entrepreneur)</span>
                </label>
                <p className="text-xs text-gray-500 mt-1 ml-6">
                    Cochez cette case si vous êtes auto-entrepreneur non assujetti à la TVA.
                </p>
            </div>

            <div className={styles.formGroup}>
                <label className="block text-sm font-medium mb-1">Mentions Légales / Conditions</label>
                <textarea
                    name="terms"
                    value={settings.terms}
                    onChange={handleChange}
                    className={styles.input}
                    rows={4}
                    placeholder="Conditions de paiement, livraison, etc."
                />
            </div>
        </div>
    );
}
