"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Image 
          src="/images/logo.jpg" 
          alt="Saraswati Convent School Logo" 
          width={60} 
          height={60} 
          style={{ borderRadius: '50%' }}
        />
        <div className={styles.schoolName}>
          Saraswati Convent<br />School
        </div>
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <a href="tel:+919174081035" className={styles.callButton}>
        📞 Call Now
      </a>
    </header>
  );
}
