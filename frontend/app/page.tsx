import styles from "./page.module.scss";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Hello World
      </main>
      <Footer />
    </div>
  );
}
