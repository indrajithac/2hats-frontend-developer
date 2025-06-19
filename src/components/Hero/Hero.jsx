import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      className={styles.heroSection}
      role="region"
      aria-label="Hero Banner"
    >
      <div className="container">
        <div className={styles.heroGrid}>
          <div className="d-none d-md-block" />
          <div className={styles.heroContent}>
            <h1>New Generation Ceramic Tile</h1>
            <h3>
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
              aptent dapibus metus maecenas consequat. Elementum interdum a
              semper. Netus nullam eros nisi volutpat nibh ex ultricies.
              Pharetra sagittis sit aliquet at. Magna nam platea justo.
            </h3>
            <button aria-label="Learn more about ceramic tiles">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
