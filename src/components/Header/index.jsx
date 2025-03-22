import styles from "./Header.module.scss";

export const Header = ({ title, description, image, className = "" }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles["header-text"]}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className={styles["header-image"]}>
        <img alt={description} src={image} />
      </div>
    </header>
  );
};
