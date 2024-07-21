//import Footer from "../../components/Footer";
//import Header from "../../components/Header";
//import Container from "../../components/Container";
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";

function sobre() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre.</p>
      <div className={styles.icones}>
        <GoMail className={styles.icone} />
        <BsInstagram className={styles.icone} />
        <BsYoutube className={styles.icone} />
        <BsGithub className={styles.icone} />
        <BsLinkedin className={styles.icone} />
      </div>
    </section>
  );
}

export default sobre;
