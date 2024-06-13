import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import ClientUrl from "../components/ClientUrl";

export default function Home() {
  return (
    <main className={styles.main}>
      <ClientUrl />
      <Link href="/">Go to home</Link>
    </main>
  );
}
