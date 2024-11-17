import { Header } from "components/Header";
import relogio from "assets/inicial.png";
import styles from "./Home.module.scss";

export const HomePage = () => {
  return (
    <main>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil!"
        image={relogio}
        className={styles.header}
      />
    </main>
  );
};
