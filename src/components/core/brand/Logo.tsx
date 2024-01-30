import styles from "./Logo.module.scss";
import clsx from "clsx";
interface LogoProps {
  className?: any;
}

export default function Logo({ className }: LogoProps) {
  const f1 = clsx(styles.f1, "bg-blue-200");
  const f2 = clsx(styles.f2, "bg-indigo-300");
  const f3 = clsx(styles.f3, "bg-indigo-300");
  const f4 = clsx(styles.f4, "bg-violet-400");

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
