import Link from "next/link";
import styles from "../styles/sidebar.module.css";

const resources = [
  { name: "films", path: "/films" },
  { name: "people", path: "/people" },
  { name: "planets", path: "/planets" },
  { name: "species", path: "/species" },
  { name: "starships", path: "/starships" },
  { name: "vehicles", path: "/vehicles" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          {resources.map((resource) => (
            <li key={resource.name}>
              <Link href={resource.path}>
                <div>{resource.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
