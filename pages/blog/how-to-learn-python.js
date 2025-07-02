import Head from "next/head";
import Image from "next/image";
import styles from "../src/page.module.css"; // Updated to match project structure

const HowToLearnPython = () => {
  return (
    <>
      <Head>
        <title>How to Learn Python - Hunting Coder</title>
        <meta name="description" content="A comprehensive guide to learning Python programming with Hunting Coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="How to Learn Python - Hunting Coder" />
        <meta property="og:description" content="A comprehensive guide to learning Python programming with Hunting Coder" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hunting Coder" />
        <meta property="og:image" content="/python-image.jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Learn Python Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <span>How to Learn Python</span>
          </h1>
          <p>
            Python is a versatile programming language used for web development, data analysis, artificial intelligence, scientific computing, and more.
          </p>
          <Image
            src="/python-image.jpg" // Updated to a valid path in /public
            alt="Learn Python Programming"
            width={600}
            height={400}
            className={styles.blogImage} // Ensure this class exists in page.module.css
          />
          <p>
            Whether you\'re just starting out or looking to switch careers, learning Python can open up numerous opportunities.
          </p>
          <h2>Getting Started</h2>
          <p>
            Start with the basics. Learn about variables, data types, loops, and conditional statements.
          </p>
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="https://www.python.org/about/gettingstarted/">Python Official Documentation</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/learn/python-3-tutorials">Codecademy Python Course</a>
            </li>
            <li>
              <a href="https://docs.python-guide.org/">Python Guide</a>
            </li>
          </ul>
          <h2>Best Practices</h2>
          <p>
            Practice regularly. Try to build small projects to apply what you\'ve learned.
          </p>
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Hunting Coder. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HowToLearnPython;
