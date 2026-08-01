import styles from "./gallery.module.css";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  // Mock data for initial rendering. Will be replaced by DB fetch later.
  const mockItems = [
    { id: 1, title: "Annual Day Celebration", type: "photo" as const, url: "/images/placeholder.jpg", category: "Events" },
    { id: 2, title: "Sports Meet 2025", type: "photo" as const, url: "/images/placeholder.jpg", category: "Sports" },
    { id: 3, title: "Science Exhibition", type: "photo" as const, url: "/images/placeholder.jpg", category: "Academics" },
    { id: 4, title: "School Tour", type: "video" as const, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnailUrl: "/images/placeholder.jpg", category: "Campus" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>School Gallery</h1>
        <p className={styles.subtitle}>Glimpses of life at Saraswati Convent School</p>
      </div>

      <GalleryGrid items={mockItems} />
    </div>
  );
}
