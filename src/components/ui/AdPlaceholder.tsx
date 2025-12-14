import styles from "./AdPlaceholder.module.css";

interface Props {
    format: "banner" | "sidebar" | "rectangle";
    className?: string;
}

export default function AdPlaceholder({ format, className = "" }: Props) {
    return (
        <div className={`${styles.adContainer} ${styles[format]} ${className}`}>
            <div className={styles.label}>Publicité</div>
            <div className={styles.content}>Espace publicitaire {format}</div>
        </div>
    );
}
