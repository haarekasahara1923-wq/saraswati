import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterProps {
  schoolName?: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export default function Footer({
  schoolName = "Saraswati Convent School",
  tagline = "Nurturing minds and shaping futures with quality education in Gwalior.",
  address = "Ikhara, Morar, Gwalior (MP)",
  phone = "+91-9174081035",
  email = "info@saraswaticonventschool.com",
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>{schoolName}</h3>
          <p className={styles.footerText}>{tagline}</p>
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
            📍 {address}<br />
            📞 {phone}<br />
            ✉️ {email}
          </p>
        </div>
      </div>
      
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} {schoolName}. All rights reserved.
      </div>
    </footer>
  );
}

