import styles from "./Error.module.css";
import imageNotFound from "/notFound.svg";

function Error404() {
  return (
    <div className={styles.error404}>
      <img src={imageNotFound} alt="Not Found" />
      <h1>Página no encontrada ;(</h1>
      <button className={styles.button}>
        <a href="/">Volver al inicio</a>
      </button>
    </div>
  );
}

export default Error404;
