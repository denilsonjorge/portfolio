import styles from "./Projetos.module.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/denilsonjorge?page=1&per_page=50"
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositories();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.lista}>
            {
                repositories.map((repo)=>(
                    <Card 
                     key={repo.id} 
                     name={repo.name} 
                     description={repo.description} 
                     html_url={repo.html_url} 
                    />
                ))
            }
        </section>
      ) : (
        <p>Recarregar repositorios...</p>
      )}
    </section>
  );
}

export default Projetos;
