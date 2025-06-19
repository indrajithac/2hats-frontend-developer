import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ data }) {
  return (
    <div className={styles.projectCard} aria-label={data?.title}>
      <img src={data?.image} alt={data?.title} loading="lazy" />
      <div>
        <h2>{data?.title}</h2>
        <h4>{data?.description}</h4>
      </div>
    </div>
  );
}
