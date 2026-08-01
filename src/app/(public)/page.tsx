"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Empowering Minds, Shaping Futures
          </h1>
          <p className={styles.subtitle}>
            Welcome to Saraswati Convent School, where tradition meets modern education to nurture the leaders of tomorrow.
          </p>
          <div className={styles.ctaGroup}>
            <button 
              className="btn-primary" 
              onClick={() => setIsLeadFormOpen(true)}
            >
              Admissions Open
            </button>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.statsBar}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>15+</div>
          <div className={styles.statLabel}>Years of Excellence</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>500+</div>
          <div className={styles.statLabel}>Happy Students</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>40+</div>
          <div className={styles.statLabel}>Expert Teachers</div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <h2 className={styles.sectionTitle}>Welcome to Our School</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '20px', color: 'var(--text-light)' }}>
            At Saraswati Convent School, we believe in providing a holistic environment where students thrive academically, socially, and emotionally. With state-of-the-art facilities and a dedicated faculty, we ensure every child reaches their full potential.
          </p>
          <Link href="/about" className="btn-secondary" style={{ display: 'inline-block' }}>
            Read Our Story
          </Link>
        </div>
        <div className={styles.aboutImage}>
          <div style={{ width: '100%', height: '350px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Placeholder for AI image */}
            <span style={{ color: '#888' }}>School Image</span>
          </div>
        </div>
      </section>

      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </>
  );
}
