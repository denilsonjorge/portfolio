import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import styles from "./Card.module.css"
import { FaJs } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Crad({name, description, html_url}) {
    return ( 
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs/>
                <FaReact/>
                </div>
                <Link to={html_url} className={styles.botao}>
                    <a href={html_url} rel="nopenner norefferer" target="_blank">
                    <BsArrowRight/>
                    </a>
                </Link>
            </div>
        </section>
     );
}

export default Crad;