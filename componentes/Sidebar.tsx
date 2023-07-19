import Link from "next/link";
import styles from "../styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/ships">Ships</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
