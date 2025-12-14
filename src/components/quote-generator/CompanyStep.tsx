import { Company } from "@/types/quote";
import styles from "./QuoteForm.module.css"; // Reuse or create specific CSS
import { Upload, X } from "lucide-react";
import Image from "next/image";

interface Props {
    data: Company;
    onChange: (data: Company) => void;
}

export default function CompanyStep({ data, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange({ ...data, logo: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const removeLogo = () => {
        onChange({ ...data, logo: undefined });
    };

    return (
        <div className="space-y-4">
            <div className={styles.formGroup}>
                <label className="block text-sm font-medium mb-1">Logo de l'entreprise</label>
                <div className={styles.logoUploadContainer}>
                    {data.logo ? (
                        <div className={styles.logoPreview}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={data.logo} alt="Logo" className={styles.uploadedLogo} />
                            <button onClick={removeLogo} className={styles.removeLogoBtn} title="Supprimer le logo">
                                <X size={14} />
                            </button>
                        </div>
                    ) : (
                        <label className={styles.uploadButton}>
                            <Upload size={20} className="mb-2 text-gray-400" />
                            <span className="text-sm text-gray-500">Cliquez pour ajouter un logo</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className="block text-sm font-medium mb-1">Nom / Raison Sociale *</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ex: ACME SAS"
                    required
                />
            </div>

            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">SIRET *</label>
                    <input
                        type="text"
                        name="siret"
                        value={data.siret}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="14 chiffres"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Statut Juridique</label>
                    <input
                        type="text"
                        name="legalStatus"
                        value={data.legalStatus || ''}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Ex: Auto-entrepreneur"
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className="block text-sm font-medium mb-1">Adresse Complète *</label>
                <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="123 Rue de la Paix, 75000 Paris"
                    required
                />
            </div>

            <div className={styles.grid2}>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="contact@entreprise.com"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">Téléphone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="06 12 34 56 78"
                    />
                </div>
            </div>
        </div>
    );
}
