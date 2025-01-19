import styles from "./Description.module.css";

function Description() {
  return (
    <section className={styles.description} aria-labelledby="description-title">
      <div className={styles.left}>
        <h2 id="description-title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius
          sed, perspiciatis labore autem culpa obcaecati! Adipisci, corporis
          est. Nesciunt earum atque molestiae. Assumenda distinctio corrupti
          cumque eveniet a praesentium!
        </p>
      </div>
      <div className={styles.right}></div>
    </section>
  );
}

export default Description;
