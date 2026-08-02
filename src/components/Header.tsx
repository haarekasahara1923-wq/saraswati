"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

interface HeaderProps {
  phone?: string;
  schoolName?: string;
  logoUrl?: string;
}

export default function Header({ 
  phone = "+919174081035", 
  schoolName = "Saraswati Convent School",
  logoUrl 
}: HeaderProps) {
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
        <img 
          src={logoUrl || "/images/logo.jpg"} 
          alt={`${schoolName} Logo`} 
          style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div className={styles.schoolName}>
          {schoolName}
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

      <a href={`tel:${phone}`} className={styles.callButton}>
        📞 Call Now
      </a>
    </header>
  );
}

