import styles from "./gallery.module.css";
import GalleryGrid from "@/components/GalleryGrid";
import { db } from "@/db";
import { galleryItems } from "@/db/schema";
import { desc } from "drizzle-orm";

export const revalidate = 0; // always fresh from DB

export default async function GalleryPage() {
  const items = await db
    .select()
    .from(galleryItems)
    .orderBy(desc(galleryItems.createdAt));

  const mappedItems = items.map((item) => ({
    id: item.id,
    title: item.title,
    type: item.type as "photo" | "video",
    url: item.cloudinaryUrl,
    thumbnailUrl: item.thumbnailUrl ?? undefined,
    category: item.category ?? "General",
  }));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>School Gallery</h1>
        <p className={styles.subtitle}>Glimpses of life at Saraswati Convent School</p>
      </div>

      {mappedItems.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
          <p style={{ fontSize: "1.2rem" }}>No media uploaded yet. Check back soon!</p>
        </div>
      ) : (
        <GalleryGrid items={mappedItems} />
      )}
    </div>
  );
}
