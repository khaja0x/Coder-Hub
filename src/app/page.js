
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coder Hub</title>
        <meta name="description" content="A blog for hunting code from a Coder Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.mainnav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Coder Hub</span>
        </h1>
        <div className={styles.imagewrap}>
          <img className={styles.myImg} src="/homeing.jpg" alt="Coder Hub" />
        </div>
        <div className={styles.center}>
          <p className={styles.description}>
            A blog for hunting code from a Coder Hub
          </p>
        </div>

        <section className={styles.popularBlogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3><Link href="/blog/how-to-learn-javascript">How to Learn JavaScript ?</Link></h3>
            <p>JavaScript is a language used to design for the web.</p>
          </div>
          <div className={styles.blogItem}>
            <h3><Link href="/blog/how-to-learn-react">How to Learn React ?</Link></h3>
            <p>React is a JavaScript library for building user interfaces.</p>
          </div>
          <div className={styles.blogItem}>
            <h3><Link href="/blog/how-to-learn-python">How to Learn Python ?</Link></h3>
            <p>Python is a versatile programming language used for web development, data analysis, and more.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Coder Hub</p>
      </footer>
    </div>
  );
}