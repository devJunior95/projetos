import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {

    const [menu, setMenu] = useState({display: "none"});

    const handleMenu = () => {
        if(menu.display === "none") {
            setMenu({display: "flex"})
        }else {
            setMenu({display: "none"})
        }
    }

    return ( 
        <header className={styles.header}>
            <p>Dev Junior</p>
            <p>Dev Junior</p>
            <p>Dev Junior</p>
            <p>Dev Junior</p>
            <span onClick={handleMenu} className={`material-symbols-outlined ${styles.menu_icon}`}>
            menu
            </span>
            <nav style={menu}>
                <ul className={styles.menu_options}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projetos</Link></li>
                    <li><Link to="/github">Github</Link></li>
                    <li><Link to="/skills">Habilidades</Link></li>
                </ul>
            </nav>
            <nav className={styles.navbar}>
                <ul className={styles.menu_list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projetos</Link></li>
                    <li><Link to="/github">Github</Link></li>
                    <li><Link to="/skills">Habilidades</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;