import styles from "./about.module.css";
import { db } from "@/db";
import { aboutContent } from "@/db/schema";

export const revalidate = 0;

export default async function AboutPage() {
  const items = await db.select().from(aboutContent);

  const director = items.find((i) => i.role === "director");
  const principal = items.find((i) => i.role === "principal");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Saraswati Convent School</h1>
        <p className={styles.subtitle}>A legacy of education and character building</p>
      </div>

      <section className={styles.contentSection}>
        {/* Director */}
        <div className={styles.messageCard}>
          <div className={styles.imagePlaceholder}>
            {director?.photoUrl ? (
              <img
                src={director.photoUrl}
                alt={director.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
            ) : (
              <span>Director Photo</span>
            )}
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.roleTitle}>Director&apos;s Message</h2>
            <h3 className={styles.name}>{director?.name || "—"}</h3>
            {director?.designation && (
              <p style={{ color: "#777", marginBottom: "10px", fontStyle: "italic" }}>{director.designation}</p>
            )}
            <p className={styles.message}>
              {director?.message || "Message coming soon..."}
            </p>
          </div>
        </div>

        {/* Principal */}
        <div className={styles.messageCard} style={{ flexDirection: "row-reverse" }}>
          <div className={styles.imagePlaceholder}>
            {principal?.photoUrl ? (
              <img
                src={principal.photoUrl}
                alt={principal.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
            ) : (
              <span>Principal Photo</span>
            )}
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.roleTitle}>Principal&apos;s Message</h2>
            <h3 className={styles.name}>{principal?.name || "—"}</h3>
            {principal?.designation && (
              <p style={{ color: "#777", marginBottom: "10px", fontStyle: "italic" }}>{principal.designation}</p>
            )}
            <p className={styles.message}>
              {principal?.message || "Message coming soon..."}
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
