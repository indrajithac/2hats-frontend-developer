import styles from "./SliderIndicator.module.css";

export default function SliderIndicator({
  images,
  currentImage,
  handleNext,
  handleBack,
  prevDisabled,
  nextDisabled,
}) {
  if (!images || images.length <= 1) return null;

  return (
    <div className={styles.indicatorWrapper}>
      <button
        onClick={handleBack}
        disabled={prevDisabled}
        className={styles.navButton}
        aria-label="Previous image"
      >
        {/* Left Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <path
            d="M12.2426 5.59173C12.3199 5.66882 12.3812 5.76039 12.423 5.86121C12.4648 5.96202 12.4863 6.07009 12.4863 6.17923C12.4863 6.28837 12.4648 6.39643 12.423 6.49725C12.3812 6.59806 12.3199 6.68963 12.2426 6.76673L9.00929 10.0001L12.2426 13.2334C12.3984 13.3892 12.486 13.6005 12.486 13.8209C12.486 14.0412 12.3984 14.2526 12.2426 14.4084C12.0868 14.5642 11.8755 14.6517 11.6551 14.6517C11.4348 14.6517 11.2234 14.5642 11.0676 14.4084L7.24262 10.5834C7.16537 10.5063 7.10408 10.4147 7.06226 10.3139C7.02045 10.2131 6.99892 10.105 6.99892 9.99589C6.99892 9.88675 7.02045 9.77868 7.06226 9.67787C7.10408 9.57706 7.16537 9.48549 7.24262 9.40839L11.0676 5.58339C11.3843 5.26673 11.9176 5.26673 12.2426 5.59173Z"
            fill="#161616"
          />
        </svg>
      </button>

      {images.map((_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${
            currentImage === i ? styles.activeDot : ""
          }`}
        ></div>
      ))}

      <button
        onClick={handleNext}
        disabled={nextDisabled}
        className={styles.navButton}
        aria-label="Next image"
      >
        {/* Right Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <path
            d="M7.75738 5.59173C7.68012 5.66882 7.61883 5.76039 7.57701 5.86121C7.5352 5.96202 7.51367 6.07009 7.51367 6.17923C7.51367 6.28837 7.5352 6.39643 7.57701 6.49725C7.61883 6.59806 7.68012 6.68963 7.75738 6.76673L10.9907 10.0001L7.75738 13.2334C7.60156 13.3892 7.51402 13.6005 7.51402 13.8209C7.51402 14.0412 7.60156 14.2526 7.75738 14.4084C7.91319 14.5642 8.12452 14.6517 8.34488 14.6517C8.56523 14.6517 8.77656 14.5642 8.93238 14.4084L12.7574 10.5834C12.8346 10.5063 12.8959 10.4147 12.9377 10.3139C12.9796 10.2131 13.0011 10.105 13.0011 9.99589C13.0011 9.88675 12.9796 9.77868 12.9377 9.67787C12.8959 9.57706 12.8346 9.48549 12.7574 9.40839L8.93238 5.58339C8.61571 5.26673 8.08238 5.26673 7.75738 5.59173Z"
            fill="#161616"
          />
        </svg>
      </button>
    </div>
  );
}
