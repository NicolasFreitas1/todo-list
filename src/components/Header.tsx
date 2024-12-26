import styles from "./Header.module.css";

import todoLogo from "/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="logotipo aplicação" />
    </header>
  );
}
