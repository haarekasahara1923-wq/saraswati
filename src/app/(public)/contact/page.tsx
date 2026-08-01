"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      
      <div className={styles.grid}>
        <div className={styles.infoCard}>
          <h3>Get In Touch</h3>
          <p>We would love to hear from you. Reach out to us for admissions, queries, or feedback.</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong>Address</strong>
                <p>Saraswati Convent School, Ikhara, Morar, Gwalior (MP)</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+919174081035">+91-9174081035</a></p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:info@saraswaticonventschool.com">info@saraswaticonventschool.com</a></p>
              </div>
            </div>
          </div>
          
          <button 
            className="btn-primary" 
            style={{ marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}
            onClick={() => setIsLeadFormOpen(true)}
          >
            📱 Message us on WhatsApp
          </button>
        </div>
        
        <div className={styles.mapCard}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.517336782298!2d78.22687135!3d26.22495865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6b3e9458fcd%3A0xc6651261d7b05615!2sMorar%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </div>
  );
}
