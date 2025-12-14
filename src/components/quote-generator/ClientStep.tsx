import { Client } from "@/types/quote";
import styles from "./QuoteForm.module.css";

interface Props {
    data: Client;
    onChange: (data: Client) => void;
}

export default function ClientStep({ data, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    return (
        <div className="space-y-4">
            <div className={styles.formGroup}>
                <label className="block text-sm font-medium mb-1">Nom du Client / Entreprise *</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Jean Dupont ou Client SAS"
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label className="block text-sm font-medium mb-1">Adresse *</label>
                <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Adresse du client"
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
                        placeholder="client@email.com"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className="block text-sm font-medium mb-1">TVA Intra.</label>
                    <input
                        type="text"
                        name="vatNumber"
                        value={data.vatNumber || ''}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="FR..."
                    />
                </div>
            </div>
        </div>
    );
}
