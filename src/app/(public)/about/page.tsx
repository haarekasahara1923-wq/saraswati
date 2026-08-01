import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Saraswati Convent School</h1>
        <p className={styles.subtitle}>A legacy of education and character building</p>
      </div>

      <section className={styles.contentSection}>
        <div className={styles.messageCard}>
          <div className={styles.imagePlaceholder}>
            {/* AI Image or Uploaded via Admin */}
            <span>Director Photo</span>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.roleTitle}>Director&apos;s Message</h2>
            <h3 className={styles.name}>Mr. John Doe</h3>
            <p className={styles.message}>
              "Education is not preparation for life; education is life itself. At Saraswati Convent School, we strive to provide an environment that fosters intellectual, physical, and emotional growth."
            </p>
          </div>
        </div>

        <div className={styles.messageCard} style={{ flexDirection: 'row-reverse' }}>
          <div className={styles.imagePlaceholder}>
            {/* AI Image or Uploaded via Admin */}
            <span>Principal Photo</span>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.roleTitle}>Principal&apos;s Message</h2>
            <h3 className={styles.name}>Mrs. Jane Smith</h3>
            <p className={styles.message}>
              "Our mission is to nurture the leaders of tomorrow. We focus on academic excellence combined with strong moral values to help our students navigate the challenges of the future."
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionVision}>
        <div className={styles.mvCard}>
          <h3>Our Mission</h3>
          <p>To provide high-quality education that empowers students to become responsible, confident, and compassionate global citizens.</p>
        </div>
        <div className={styles.mvCard}>
          <h3>Our Vision</h3>
          <p>To be a premier educational institution recognized for academic excellence and the holistic development of students.</p>
        </div>
      </section>
    </div>
  );
}
