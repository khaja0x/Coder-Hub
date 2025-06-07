import Head from "next/head";
import Link from "next/link";
import styles from "../src/app/Blog.module.css";
import { useState } from "react";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs || []);

  // Helper function to truncate text without cutting off words
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substr(0, text.lastIndexOf(" ", maxLength));
    return truncated + "...";
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coder Hub - Blog</title>
        <meta name="description" content="Coder Hub Blog - Read our latest coding articles and tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Coder Hub Blog</span>
        </h1>

        <section className={styles.blogSection}>
          {blogs.length > 0 ? (
            blogs.map((blogitem) => (
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
        <p>© {new Date().getFullYear()} Coder Hub. All rights reserved.</p>
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
        // Ensure the blog data has the expected fields and normalize keys
        allBlogs.push({
          slug: item.replace(".json", ""),
          title: blogData.Title || blogData.title || "Untitled",
          content: blogData.Content || blogData.content || "",
        });
      } catch (error) {
        console.error(`Error reading or parsing blogdata/${item}:`, error);
        continue; // Skip invalid files
      }
    }
  } catch (error) {
    console.error("Error reading blogdata directory:", error);
    // Return an empty array if the directory can't be read
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;