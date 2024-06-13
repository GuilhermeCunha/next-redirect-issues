import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ClientUrl from "./components/ClientUrl";

export default function Home() {
  return (
    <main className={styles.main}>
      <ClientUrl />
      <Link href="/page-2">Go to page 2</Link>
      <Link href="/redirect/using-response">
        Test redirecting using NextResponse.redirect(req.url)
      </Link>
      <Link href="/redirect/using-redirect">
        Test redirecting using {"redirect('/')"}
      </Link>
      <Link href="/redirect/using-middleware">
        Test redirecting using NextResponse.redirect(req.url) on the middleware
      </Link>
    </main>
  );
}
