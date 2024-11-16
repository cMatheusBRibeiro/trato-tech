import classNames from "classnames";
import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";

export const Navbar = () => {
  const isLinkSelected = (link) => {
    return window.location.pathname === link;
  };

  const iconProps = {
    color: "white",
    size: 24,
  };

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <a
          href="/"
          className={classNames(styles.link, {
            [styles.selected]: isLinkSelected("/"),
          })}
        >
          Página inicial
        </a>
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {isLinkSelected("/carrinho") ? (
            <RiShoppingCart2Fill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </a>
      </div>
      <div className={styles.busca}></div>
    </nav>
  );
};
