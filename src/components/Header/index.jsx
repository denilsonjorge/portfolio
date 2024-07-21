import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { useState } from "react";

function Header() {

    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu=()=>{
        setShowMenu(!showMenu)

    }

    return ( 
        <header className={styles.header}>
            <Link to="/">
                <span>Denilson.dev</span>
            </Link>
            <nav onClick={toggleMenu} className={`${styles.menuSandwitch} ${ showMenu ? styles.show : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projectos</Link>
                <Link to="/contatos">Contato</Link>
            </nav>
            <div 
            className={styles.menuButton}
            onClick={toggleMenu}
            >
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
     );
}

export default Header;