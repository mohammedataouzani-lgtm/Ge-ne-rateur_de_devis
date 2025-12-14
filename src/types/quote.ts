export type QuoteStatus = 'draft' | 'final';

export interface Company {
    name: string;
    address: string;
    siret: string;
    email: string;
    phone: string;
    logo?: string; // Data URL or path
    legalStatus?: string; // e.g., Auto-entrepreneur, SARL
    vatNumber?: string; // TVAI
}

export interface Client {
    name: string;
    address: string;
    email: string;
    phone?: string;
    vatNumber?: string;
}

export interface QuoteItem {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    vatRate: number; // Percentage, e.g., 20
}

export interface QuoteSettings {
    date: string; // ISO date
    validityDate: string; // ISO date
    quoteNumber: string;
    currency: string;
    terms: string; // Mentions legales specifques
    isVatExempt: boolean; // "TVA non applicable, art. 293 B du CGI"
}

export interface QuoteData {
    id: string;
    company: Company;
    client: Client;
    items: QuoteItem[];
    settings: QuoteSettings;
    totalHT: number;
    totalTVA: number;
    totalTTC: number;
}
