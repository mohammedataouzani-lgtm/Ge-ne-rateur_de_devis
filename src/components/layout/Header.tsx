"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import styles from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();
    const isGenerator = pathname === "/generateur";

    return (
        <>
            <div className={styles.topBanner}>
                <AdPlaceholder format="banner" className={styles.adBanner} />
            </div>
            <header className={styles.header}>
                <div className="container">
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.logo}>DevisFacile</Link>
                        <div className={styles.links}>
                            <Link href="/blog" className={`${styles.logo} !text-base !font-medium`}>Blog</Link>
                            <Link href="/faq" className={`${styles.logo} !text-base !font-medium`}>Aide</Link>
                            {!isGenerator && (
                                <Link href="/generateur" className="btn btn-primary">
                                    Créer un devis
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
