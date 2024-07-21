//import Container from "../../components/Container";
//import Header from "../../components/Header";
//import Footer from "../../components/Footer";
import styles from "./Page404.module.css"

function Page404() {
    return ( 
        <>

            <h2 className={styles.titulo2}>
                Algu de erra não esta certo!
            </h2>
            <div className={styles.textos}><span className={styles.texto_grande}>404</span>
            <br />
            <strong className={styles.texto_red}>Pagina não localizada</strong></div>
        </>
     );
}

export default Page404;