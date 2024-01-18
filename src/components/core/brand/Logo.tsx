import styles from "./Logo.module.scss";

interface LogoProps {
  className?: any;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`${styles.logoWrapper} ${className}`}>
      <div className={styles.logo}>
        <span className={styles.f1} />
        <span className={styles.f2} />
        <span className={styles.f3} />
        <span className={styles.f4} />
      </div>
    </div>
  );
}
