import { QuoteItem } from "@/types/quote"; // Assumed QuoteItem type
import styles from "./QuoteForm.module.css";
import { Plus, Trash2 } from "lucide-react";

interface Props {
    items: QuoteItem[];
    onChange: (items: QuoteItem[]) => void;
    currency: string;
}

export default function ItemsStep({ items, onChange, currency }: Props) {
    const updateItem = (id: string, field: keyof QuoteItem, value: any) => {
        const newItems = items.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        onChange(newItems);
    };

    const addItem = () => {
        const newItem: QuoteItem = {
            id: Math.random().toString(36).substr(2, 9),
            description: "",
            quantity: 1,
            unitPrice: 0,
            vatRate: 20,
        };
        onChange([...items, newItem]);
    };

    const removeItem = (id: string) => {
        if (items.length > 1) {
            onChange(items.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="space-y-4">
            <div className={styles.tableResponsive}>
                <table className={styles.itemsTable}>
                    <thead>
                        <tr>
                            <th style={{ width: "40%" }}>Description</th>
                            <th style={{ width: "15%" }}>Qté</th>
                            <th style={{ width: "20%" }}>Prix Unit.</th>
                            <th style={{ width: "15%" }}>TVA %</th>
                            <th style={{ width: "10%" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type="text"
                                        value={item.description}
                                        onChange={(e) => updateItem(item.id, "description", e.target.value)}
                                        className={styles.input}
                                        placeholder="Description"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateItem(item.id, "quantity", parseFloat(e.target.value) || 0)}
                                        className={styles.input}
                                        min="0"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.unitPrice}
                                        onChange={(e) => updateItem(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                                        className={styles.input}
                                        min="0"
                                        step="0.01"
                                    />
                                </td>
                                <td>
                                    <select
                                        value={item.vatRate}
                                        onChange={(e) => updateItem(item.id, "vatRate", parseFloat(e.target.value))}
                                        className={styles.input}
                                    >
                                        <option value={20}>20%</option>
                                        <option value={10}>10%</option>
                                        <option value={5.5}>5.5%</option>
                                        <option value={2.1}>2.1%</option>
                                        <option value={0}>0%</option>
                                    </select>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded"
                                        title="Supprimer"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button onClick={addItem} className="btn btn-outline w-full flex items-center justify-center gap-2">
                <Plus size={18} /> Ajouter une ligne
            </button>

            <div className="mt-6 flex justify-end">
                {/* Summary can be shown here or kept in sidebar/preview */}
            </div>
        </div>
    );
}
