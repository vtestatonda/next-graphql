import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CHARACTERS } from "../apollo/queries/characters";
import { CardComponent } from "../component/CardComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { data } = useQuery(GET_CHARACTERS(page));
  //cada vez que se hace clic en el una pagina registra el valor y lo va a buscar a la API

  if (!data) {
    return "loading";
  }

  const mockData = data.characters.results;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our galery of Ricky and Morty!
        </h1>

        <div className={styles.grid}>
          {mockData.map((element, index) => {
            return <CardComponent character={element} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <ul className="pagination">
          {mockData.map((element, index) => {
            //este map me esta trayendo los 20 resultados de la api y colocandolo como numeros de pagina(hay que modificarlo)
            //una vez que hacemos clic en una de esas paginas lo guarda en la variable page.
            return (
              <li key={index}>
                <a
                  onClick={() => {
                    setPage(index + 1);
                  }}
                  className={page === index + 1 && "active"}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
