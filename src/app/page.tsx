import Link from "next/link";
import styles from "../../styles/page.module.css";
import Sidebar from "../../componentes/Sidebar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <span>Hello</span>
      </main>
    </div>
  );
}
