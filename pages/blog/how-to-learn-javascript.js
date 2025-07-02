import Head from "next/head";
import styles from "../src/page.module.css"; // Updated to match project structure

const HowToLearnJavascript = () => {
  return (
    <>
      <Head>
        <title>How to Learn JavaScript - Hunting Coder</title>
        <meta name="description" content="Learn how to code in JavaScript with Hunting Coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="How to Learn JavaScript - Hunting Coder" />
        <meta property="og:description" content="Learn how to code in JavaScript with Hunting Coder" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <span>How to Learn JavaScript</span>
          </h1>
          <p>
            JavaScript is a language used to design for the web. It\'s one of the core technologies of the web, alongside HTML and CSS.
          </p>
          {/* Add more content as needed */}
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Hunting Coder. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HowToLearnJavascript;
