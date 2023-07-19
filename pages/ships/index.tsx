import styles from "../../styles/page.module.css";
import RootLayout from "../../src/app/layout";
import Link from "next/link";

interface ShipMainProps {
  id: number;
  name: string;
}

type ShipMainPropsArray = ShipMainProps[];

const ships: ShipMainPropsArray = [
  { id: 1, name: "ship1" },
  { id: 2, name: "ship2" },
  { id: 3, name: "ship3" },
  { id: 4, name: "ship4" },
  { id: 5, name: "ship5" },
];

export default function Home({ id, name }: ShipMainProps): JSX.Element {
  return (
    <RootLayout>
      <main className={styles.main}>
        <h1>SHIPS</h1>
        <section className={styles.section}>
          <ul className={styles.grid}>
            {ships.map((ship: ShipMainProps) => (
              <li className={styles.li} key={ship.id}>
                <div>{ship.name}</div>
                <span>{ship.id}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </RootLayout>
  );
}
