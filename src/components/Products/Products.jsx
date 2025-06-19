import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
import prod1 from "../../assets/products/prod1.webp";
import prod2 from "../../assets/products/prod2.webp";
import prod3 from "../../assets/products/prod3.webp";
import prod4 from "../../assets/products/prod4.webp";

export default function Products() {
  const products = [
    {
      title: "Bathroom Tiles",
      description: "Ante mus blandit sapien sociosqu per consequat ad.",
      image: prod1,
      id: 1,
    },
    {
      title: "Marble",
      description: "Ante mus blandit sapien sociosqu",
      image: prod2,
      id: 2,
    },
    {
      title: "Outdoor Flooring",
      description: "Ante mus blandit sapien sociosqu per consequat ad.",
      image: prod3,
      id: 3,
    },
    {
      title: "Kitchen Interior",
      description: "Ante mus blandit sapien sociosqu per consequat ad.",
      image: prod4,
      id: 4,
    },
  ];

  return (
    <section aria-label="Products" className={styles.productsSection}>
      <div className="container">
        <h1>Products</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </h3>
        <div className={styles.productGrid}>
          {products?.map((product) => (
            <ProductCard data={product} key={product?.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
