//import Header from "../../components/Header";
//import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
//import Container from "../../components/Container";
import styles from "./Home.module.css"
function Home() {
  return (
    <>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Denilson Dev</span>
              <br />
              Dev Front End
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre min
            </Link>
          </div>
          <figure>
            <img
              className={styles.img_home}
              src="./developer-red.svg"
              alt="imagem de home"
            />
          </figure>
        </section>
    </>
  );
}

export default Home;
