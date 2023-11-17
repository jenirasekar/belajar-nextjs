import styles from "./Navbar.module.css";

// pemanggilan class css dari file dengan ekstensi module.css
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
    </div>
  );
};

export default Navbar;
