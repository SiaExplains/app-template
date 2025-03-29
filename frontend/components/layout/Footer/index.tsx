'use client';

import styles from './Footer.module.scss';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>About Us</h3>
            <ul>
              <li><a href="/about">Our Story</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Products</h3>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/roadmap">Roadmap</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Resources</h3>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/api">API</a></li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates and news.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.social}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">⌨</a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 