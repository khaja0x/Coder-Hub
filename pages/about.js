import styles from "../src/app/page.module.css";
import Image from "next/image";
import { useState } from "react";

export const metadata = {
  title: "Coder Hub - About",
  description: "About Coder Hub - Learn about our coding blog and mission",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Coder Hub - About",
    description: "About Coder Hub - Learn about our coding blog and mission",
    type: "website",
    images: [
      {
        url: "/about.jpg", // Replace with actual image path
        width: 300,
        height: 200,
        alt: "About Coder Hub",
      },
    ],
  },
};

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>About Coder Hub</span>
        </h1>

        <section className={styles.aboutSection}>
          <div className={styles.heroSection}>
            <Image
              className={styles.heroImage}
              src={imageError ? "/placeholder.jpg" : "/about.jpg"}
              alt="About Coder Hub"
              width={300}
              height={200}
              onError={() => setImageError(true)}
              priority // Optional: Prioritize loading for hero image
            />
            <p className={styles.description}>
              Coder Hub is a passionate community dedicated to sharing coding knowledge and experiences.
            </p>
          </div>

          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower developers of all levels by providing insightful tutorials, tips, and resources
              to master modern programming technologies. Whether you're a beginner or an experienced coder, we aim
              to help you navigate the ever-evolving world of software development.
            </p>

            <h2>Who We Are</h2>
            <p>
              We are a team of enthusiastic developers who love to explore, learn, and share knowledge about coding.
              From JavaScript to TypeScript, React to Next.js, we cover a wide range of topics to help you stay ahead
              in your coding journey.
            </p>

            <h2>Why Coder Hub?</h2>
            <p>
              The name "Coder Hub" reflects our passion for hunting down solutions to complex coding
              problems and sharing them with the community. We believe in learning by doing, and our blog is a
              reflection of that philosophy.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Coder Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}