import React from "react";
import styles from "./Projects.module.css";
import project1 from "../../assets/projects/project1.webp";
import project2 from "../../assets/projects/project2.webp";
import project3 from "../../assets/projects/project3.webp";
import project4 from "../../assets/projects/project4.webp";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useEffect, useRef, useState } from "react";
import SliderIndicator from "../SliderIndicator/SliderIndicator";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef(null);
  const refs = useRef([]);
  const projects = [
    {
      title: "Kingdom Tower",
      description: "Marble Flooring",
      image: project1,
      id: 1,
    },
    {
      title: "Dubai mall",
      description: "Wood Flooring",
      image: project2,
      id: 2,
    },
    {
      title: "King Road Offices",
      description: "Outdoor Flooring",
      image: project3,
      id: 3,
    },
    {
      title: "Beach Tower Alupang",
      description: "Wood Flooring",
      image: project4,
      id: 4,
    },
  ];
  useEffect(() => {
    const slider = containerRef.current;
    const handleScroll = () => {
      const sliderWidth = slider.offsetWidth;
      const sliderLeft = slider.getBoundingClientRect().left;
      const activeSlide = Array.from(slider.children).find((slide) => {
        const slideLeft = slide.getBoundingClientRect().left;
        return slideLeft >= sliderLeft;
      });
      setCurrentImage(
        activeSlide ? Array.from(slider.children).indexOf(activeSlide) : 0
      );
    };
    slider?.addEventListener("scroll", handleScroll);
    return () => slider?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNext = () => {
    let currentIndex = currentImage;
    let nextIndex;
    if (currentIndex + 1 == images?.length) {
      nextIndex = currentIndex;
    } else {
      nextIndex = currentIndex + 1;
    }
    setCurrentImage(nextIndex);
    if (refs.current[nextIndex]) {
      refs.current[nextIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleBack = () => {
    let currentIndex = currentImage;
    let prevIndex;
    if (currentIndex == 0) {
      prevIndex = currentIndex;
    } else {
      prevIndex = currentIndex - 1;
    }
    setCurrentImage(prevIndex);
    if (refs.current[prevIndex]) {
      refs.current[prevIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };
  return (
    <section aria-label="Products" className={styles.projectsSection}>
      <div className="container">
        <h1>Projects</h1>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </h3>
        <div className={styles.projectGrid} ref={containerRef}>
          {projects?.map((project) => (
            <ProjectCard
              data={project}
              key={project?.id}
              ref={(el) => (refs.current[i] = el)}
            />
          ))}
        </div>
        <SliderIndicator
          images={projects}
          currentImage={currentImage}
          handleBack={handleBack}
          handleNext={handleNext}
          prevDisabled={currentImage === 0}
          nextDisabled={currentImage === projects?.length - 1}
        />
        <div className={styles.buttonContainer}>
          <button>View All</button>
        </div>
      </div>
    </section>
  );
}
