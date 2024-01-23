import styles from "./Logo.module.scss";
import clsx from "clsx";
interface LogoProps {
  className?: any;
}

const f1 = clsx(styles.f1, "bg-lime-400 dark:bg-lime-300");
const f2 = clsx(styles.f2, "bg-emerald-300 dark:bg-lime-400");
const f3 = clsx(styles.f3, "bg-emerald-400 dark:bg-lime-500");
const f4 = clsx(styles.f4, "bg-emerald-500 dark:bg-emerald-400");

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`${styles.logoWrapper} ${className}`}>
      <div className={styles.logo}>
        <span className={f1} />
        <span className={f2} />
        <span className={f3} />
        <span className={f4} />
      </div>
    </div>
  );
}
