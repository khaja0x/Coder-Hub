import React, { useState } from 'react';
import styles from '../src/app/page.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`${styles.mainnav} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
      <button
        className={styles.mobileMenu}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={styles.hamburger}></span>
      </button>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;