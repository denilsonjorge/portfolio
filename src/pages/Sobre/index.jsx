//import Container from "../../components/Container";
//import Footer from "../../components/Footer";
//import Header from "../../components/Header";
import styles from "./Sobre.module.css";
import avatar from "./images/avatar.png";
import html from "./images/html.svg";
import css from "./images/css3.svg";
import js from "./images/js.svg";
import react from "./images/react.svg";
import sql from "./images/sql.png";
import nodejs from "./images/nodejs.svg";
function sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} className={styles.avatar} alt="avatar" />
        <div className={styles.textos}>
          <h2>Sobre</h2><br />
          <p>
            Sou <span>Denilson </span><br />
           <strong> Dev Front End</strong>
          </p>
          <p>Trabalho com desenvolvimento Web desde 2021</p><br />
          <p>Sou apaixonado por transformar ideias em realidade digital</p><br />
          <p>
            Especializado em criação de aplicações dinamicas e intuitivas,{" "}
            <br />
            com foco na experiência do Usuário.
          </p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Tecnólogias</h3>
        <div className={styles.icones}>
          <img src={html} alt="icone 1" />
          <img src={css} alt="icone 2" />
          <img src={js} alt="icone 3" />
          <img src={react} alt="icone 4" />
          <img src={nodejs} alt="icone 5" />
          <img src={sql} alt="icone 6" />
        </div>
      </div>
    </section>
  );
}

export default sobre;
