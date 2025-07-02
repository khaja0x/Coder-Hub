import Head from "next/head";
import Image from "next/image";
import styles from "../src/page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder - About</title>
        <meta name="description" content="About Hunting Coder - Learn about our coding blog and mission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hunting Coder - About" />
        <meta property="og:description" content="About Hunting Coder - Learn about our coding blog and mission" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hunting Coder" />
        <meta property="og:image" content="/about.jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:alt" content="About Hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>About Hunting Coder</span>
        </h1>

        <section className={styles.aboutSection}>
          <div className={styles.heroSection}>
            <Image
              className={styles.heroImage}
              src="/about.jpg"
              alt="About Hunting Coder"
              width={300}
              height={200}
              onError={(e) => {
                e.target.src = "/placeholder.jpg"; // Fallback on error
              }}
              priority // Optional: Prioritize loading for hero image
            />
            <p className={styles.description}>
              Hunting Coder is a passionate community dedicated to sharing coding knowledge and experiences.
            </p>
          </div>

          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower developers of all levels by providing insightful tutorials, tips, and resources
              to master modern programming technologies. Whether you\'re a beginner or an experienced coder, we aim
              to help you navigate the ever-evolving world of software development.
            </p>

            <h2>Who We Are</h2>
            <p>
              We are a team of enthusiastic developers who love to explore, learn, and share knowledge about coding.
              From JavaScript to TypeScript, React to Next.js, we cover a wide range of topics to help you stay ahead
              in your coding journey.
            </p>

            <h2>Why Hunting Coder?</h2>
            <p>
              The name "Hunting Coder" reflects our passion for hunting down solutions to complex coding
              problems and sharing them with the community. We believe in learning by doing, and our blog is a
              reflection of that philosophy.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Hunting Coder. All rights reserved.</p>
      </footer>
    </div>
  );
}
