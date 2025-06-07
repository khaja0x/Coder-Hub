import Head from "next/head";
import Link from "next/link";
import styles from "../src/app/page.module.css";
import * as fs from "fs";

const Blog = ({ allBlogs }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substr(0, text.lastIndexOf(" ", maxLength));
    return truncated + "...";
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder - Blog</title>
        <meta name="description" content="Hunting Coder Blog - Read our latest coding articles and tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hunting Coder Blog</span>
        </h1>

        <section className={styles.blogSection}>
          {allBlogs && allBlogs.length > 0 ? (
            allBlogs.map((blogitem) => (
              <div key={blogitem.slug} className={styles.blogItem}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                </Link>
                <p>{truncateText(blogitem.content, 140)}</p>
              </div>
            ))
          ) : (
            <p className={styles.noBlogs}>No blog posts available at the moment.</p>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Hunting Coder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getStaticProps(context) {
  let allBlogs = [];
  try {
    const data = await fs.promises.readdir("blogdata");
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      try {
        const myfile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
        const blogData = JSON.parse(myfile);
        allBlogs.push({
          slug: item.replace(".json", ""),
          title: blogData.Title || blogData.title || "Untitled",
          content: blogData.Content || blogData.content || "",
        });
      } catch (error) {
        console.error(`Error reading or parsing blogdata/${item}:`, error.message);
        continue;
      }
    }
    if (allBlogs.length === 0) {
      console.warn("No blog posts found in blogdata directory.");
    }
  } catch (error) {
    console.error("Error reading blogdata directory:", error.message);
  }

  return {
    props: { allBlogs },
    revalidate: 60, // Revalidate every 60 seconds
  };
}

export default Blog;