import styles from "./ProductCard.module.css";

export default function ProductCard({ data }) {
  return (
    <div className={styles.productCard} aria-label={data?.title}>
      <img src={data?.image} alt={data?.title} loading="lazy" />
      <div className={styles.overlay}>
        <h3>{data?.title}</h3>
        <h4>{data?.description}</h4>
      </div>
    </div>
  );
}
