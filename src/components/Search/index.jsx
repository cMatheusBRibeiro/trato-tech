import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="search"
        placeholder="O que você procura?"
      />
    </div>
  );
}