import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Saraswati Convent School</h3>
          <p className={styles.footerText}>
            Nurturing minds and shaping futures with quality education in Gwalior.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
            <li><Link href="/gallery" className={styles.footerLink}>Gallery</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
            <li><Link href="/admin/login" className={styles.footerLink}>Admin Login</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <p className={styles.footerText}>
            📍 Ikhara, Morar, Gwalior (MP)<br />
            📞 +91-9174081035<br />
            ✉️ info@saraswaticonventschool.com
          </p>
        </div>
      </div>
      
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Saraswati Convent School. All rights reserved.
      </div>
    </footer>
  );
}
