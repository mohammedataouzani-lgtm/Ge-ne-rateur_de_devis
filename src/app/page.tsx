import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, Smartphone } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.landing}>
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1>Générateur de Devis Gratuit pour Auto-Entrepreneurs</h1>
            <p className={styles.subtitle}>
              Créez des devis professionnels, conformes et esthétiques en moins de 2 minutes.
              Sans inscription, 100% gratuit et sécurisé.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/generateur" className="btn btn-primary">
                Commencer maintenant <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </Link>
              <Link href="#features" className="btn btn-outline">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <div className="container">
            <h2>Pourquoi utiliser notre générateur ?</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <FileText size={40} className={styles.icon} />
                <h3>Conforme 2025</h3>
                <p>Toutes les mentions légales obligatoires sont incluses automatiquement.</p>
              </div>
              <div className={styles.card}>
                <CheckCircle size={40} className={styles.icon} />
                <h3>100% Gratuit</h3>
                <p>Pas de frais cachés, pas d'abonnement. Finance par la publicité discrète.</p>
              </div>
              <div className={styles.card}>
                <Smartphone size={40} className={styles.icon} />
                <h3>Simple & Rapide</h3>
                <p>Interface optimisée pour mobile et desktop. PDF généré instantanément.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; 2025 DevisFacile. Tous droits réservés.</p>
          <div className={styles.legal}>
            <Link href="/mentions-legales">Mentions Légales</Link>
            <Link href="/contact">Contact</Link>

          </div>
        </div>
      </footer>
    </div>
  );
}
