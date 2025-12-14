import { QuoteData } from "@/types/quote";
import styles from "./LivePreview.module.css";

interface Props {
    data: QuoteData;
}

export default function LivePreview({ data }: Props) {
    const { company, client, items, settings, totalHT, totalTVA, totalTTC } = data;

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("fr-FR");
    };

    return (
        <div className={styles.previewPage}>
            <div className={styles.header}>
                <div className={styles.companyInfo}>
                    {company.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={company.logo} alt="Logo" className={styles.logo} />
                    ) : (
                        <div className={styles.placeholderLogo}>{company.name?.charAt(0) || "L"}</div>
                    )}
                    <div>
                        <h4 className={styles.companyName}>{company.name || "Votre Entreprise"}</h4>
                        <div className={styles.companyDetails}>
                            {company.address}<br />
                            {company.email} • {company.phone}<br />
                            {company.siret && <>SIRET: {company.siret}<br /></>}
                            {company.legalStatus}
                        </div>
                    </div>
                </div>

                <div className={styles.quoteMeta}>
                    <h2 className={styles.quoteTitle}>DEVIS</h2>
                    <div className={styles.metaRow}>
                        <strong>N°:</strong> {settings.quoteNumber}
                    </div>
                    <div className={styles.metaRow}>
                        <strong>Date:</strong> {formatDate(settings.date)}
                    </div>
                    <div className={styles.metaRow}>
                        <strong>Valable jusqu'au:</strong> {formatDate(settings.validityDate)}
                    </div>
                </div>
            </div>

            <div className={styles.clientSection}>
                <div className={styles.clientLabel}>Destinataire :</div>
                <div className={styles.clientInfo}>
                    <strong>{client.name || "Nom du Client"}</strong><br />
                    {client.address}<br />
                    {client.email}<br />
                    {client.vatNumber && <>TVA: {client.vatNumber}</>}
                </div>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>Désignation</th>
                        <th style={{ textAlign: 'right' }}>Qté</th>
                        <th style={{ textAlign: 'right' }}>P.U. HT</th>
                        {!settings.isVatExempt && <th style={{ textAlign: 'right' }}>TVA</th>}
                        <th style={{ textAlign: 'right' }}>Total HT</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.description || "Description..."}</td>
                            <td style={{ textAlign: 'right' }}>{item.quantity}</td>
                            <td style={{ textAlign: 'right' }}>{item.unitPrice.toFixed(2)}</td>
                            {!settings.isVatExempt && (
                                <td style={{ textAlign: 'right' }}>{item.vatRate}%</td>
                            )}
                            <td style={{ textAlign: 'right' }}>{(item.quantity * item.unitPrice).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.totalsSection}>
                <div className={styles.totals}>
                    <div className={styles.totalRow}>
                        <span>Total HT:</span>
                        <span>{totalHT.toFixed(2)} {settings.currency}</span>
                    </div>
                    {!settings.isVatExempt && (
                        <div className={styles.totalRow}>
                            <span>Total TVA:</span>
                            <span>{totalTVA.toFixed(2)} {settings.currency}</span>
                        </div>
                    )}
                    <div className={`${styles.totalRow} ${styles.totalTTC}`}>
                        <span>Total TTC:</span>
                        <span>{totalTTC.toFixed(2)} {settings.currency}</span>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                {settings.terms && (
                    <div className={styles.terms}>
                        <strong>Conditions :</strong><br />
                        {settings.terms}
                    </div>
                )}
                <div className={styles.legalFooter}>
                    {settings.isVatExempt && "TVA non applicable, art. 293 B du CGI"}
                </div>
            </div>

            <div className={styles.signatureArea}>
                <div className={styles.signatureBox}>
                    <p>Date et signature :</p>
                    <p className={styles.signatureMention}>Bon pour accord</p>
                </div>
            </div>
        </div>
    );
}
