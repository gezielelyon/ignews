import Image from "next/image";

import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/logo.svg"
          height={30}
          width={100}
          alt="Ignews Logo"
          title="Ignews Logo"
          aria-label="Ignews Logo"
        />

        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
