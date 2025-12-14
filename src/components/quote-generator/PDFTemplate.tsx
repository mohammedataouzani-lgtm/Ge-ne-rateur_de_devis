import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { QuoteData } from '@/types/quote';

// Register fonts if needed, sticking to standard Helvetica/Times for simplicity or register local fonts
// Font.register({ family: 'Roboto', src: '...' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: '#333333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    companyInfo: {
        flexDirection: 'column', // Changed to column to stack logo and text properly if needed, or row
        width: '45%',
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 10,
        objectFit: 'contain',
    },
    companyName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#2563eb',
    },
    companyDetails: {
        lineHeight: 1.4,
        color: '#666666',
    },
    quoteMeta: {
        width: '45%',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'heavy',
        marginBottom: 10,
        letterSpacing: 2,
    },
    metaRow: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    metaLabel: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    clientSection: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 4,
        marginBottom: 30,
        marginLeft: 'auto',
        width: '50%',
    },
    clientLabel: {
        fontSize: 8,
        color: '#888888',
        marginBottom: 4,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    clientName: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    table: {
        width: '100%',
        marginBottom: 30,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        alignItems: 'center',
        padding: 8,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
        alignItems: 'center',
        padding: 8,
    },
    colDesc: { width: '50%' },
    colQty: { width: '10%', textAlign: 'right' },
    colPrice: { width: '15%', textAlign: 'right' },
    colVat: { width: '10%', textAlign: 'right' },
    colTotal: { width: '15%', textAlign: 'right' },

    headerText: {
        fontWeight: 'bold',
        color: '#555555',
        fontSize: 9,
        textTransform: 'uppercase',
    },

    totalsSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    totalsBox: {
        width: 200,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    totalTTC: {
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        paddingTop: 6,
        marginTop: 6,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#2563eb',
    },

    footer: {
        marginTop: 'auto',
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        paddingTop: 20,
    },
    terms: {
        fontStyle: 'italic',
        marginBottom: 10,
        color: '#666666',
    },
    legalFooter: {
        textAlign: 'center',
        fontSize: 8,
        color: '#999999',
    },
    signatureArea: {
        marginTop: 30,
        alignItems: 'flex-end',
    },
    signatureBox: {
        width: 200,
        height: 80,
        borderWidth: 1,
        borderColor: '#dddddd',
        padding: 10,
    },
    signatureText: {
        fontSize: 8,
        color: '#888888',
    }
});

interface Props {
    data: QuoteData;
}

export default function PDFTemplate({ data }: Props) {
    const { company, client, items, settings, totalHT, totalTVA, totalTTC } = data;

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("fr-FR");
    };

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.companyInfo}>
                        {company.logo && (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <Image src={company.logo} style={styles.logo} />
                        )}
                        <View>
                            <Text style={styles.companyName}>{company.name || "Votre Entreprise"}</Text>
                            <Text style={styles.companyDetails}>{company.address}</Text>
                            <Text style={styles.companyDetails}>{company.email}</Text>
                            <Text style={styles.companyDetails}>{company.phone}</Text>
                            {company.siret && <Text style={styles.companyDetails}>SIRET: {company.siret}</Text>}
                            <Text style={styles.companyDetails}>{company.legalStatus}</Text>
                        </View>
                    </View>

                    <View style={styles.quoteMeta}>
                        <Text style={styles.title}>DEVIS</Text>
                        <View style={styles.metaRow}>
                            <Text style={styles.metaLabel}>N°:</Text>
                            <Text>{settings.quoteNumber}</Text>
                        </View>
                        <View style={styles.metaRow}>
                            <Text style={styles.metaLabel}>Date:</Text>
                            <Text>{formatDate(settings.date)}</Text>
                        </View>
                        <View style={styles.metaRow}>
                            <Text style={styles.metaLabel}>Valable jusqu'au:</Text>
                            <Text>{formatDate(settings.validityDate)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.clientSection}>
                    <Text style={styles.clientLabel}>Destinataire :</Text>
                    <Text style={styles.clientName}>{client.name || "Nom du Client"}</Text>
                    <Text style={styles.companyDetails}>{client.address}</Text>
                    <Text style={styles.companyDetails}>{client.email}</Text>
                    {client.vatNumber && <Text style={styles.companyDetails}>TVA: {client.vatNumber}</Text>}
                </View>

                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.headerText, styles.colDesc]}>Désignation</Text>
                        <Text style={[styles.headerText, styles.colQty]}>Qté</Text>
                        <Text style={[styles.headerText, styles.colPrice]}>P.U. HT</Text>
                        {!settings.isVatExempt && <Text style={[styles.headerText, styles.colVat]}>TVA</Text>}
                        <Text style={[styles.headerText, styles.colTotal]}>Total HT</Text>
                    </View>
                    {items.map((item) => (
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.colDesc}>{item.description}</Text>
                            <Text style={styles.colQty}>{item.quantity}</Text>
                            <Text style={styles.colPrice}>{item.unitPrice.toFixed(2)}</Text>
                            {!settings.isVatExempt && <Text style={styles.colVat}>{item.vatRate}%</Text>}
                            <Text style={styles.colTotal}>{(item.quantity * item.unitPrice).toFixed(2)}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalsSection}>
                    <View style={styles.totalsBox}>
                        <View style={styles.totalRow}>
                            <Text>Total HT:</Text>
                            <Text>{totalHT.toFixed(2)} {settings.currency}</Text>
                        </View>
                        {!settings.isVatExempt && (
                            <View style={styles.totalRow}>
                                <Text>Total TVA:</Text>
                                <Text>{totalTVA.toFixed(2)} {settings.currency}</Text>
                            </View>
                        )}
                        <View style={styles.totalRow}>
                            <Text style={styles.totalTTC}>Total TTC:</Text>
                            <Text style={styles.totalTTC}>{totalTTC.toFixed(2)} {settings.currency}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    {settings.terms && (
                        <Text style={styles.terms}>{settings.terms}</Text>
                    )}
                    <Text style={styles.legalFooter}>
                        {settings.isVatExempt ? "TVA non applicable, art. 293 B du CGI" : "Devis soumis au taux de TVA en vigueur"}
                    </Text>
                    <View style={styles.signatureArea}>
                        <View style={styles.signatureBox}>
                            <Text style={styles.signatureText}>Date et signature :</Text>
                            <Text style={[styles.signatureText, { textAlign: 'center', marginTop: 20 }]}>Bon pour accord</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}
