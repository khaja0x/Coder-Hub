import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../src/app/Blogpost.module.css";
import { useState } from "react";
import * as fs from "fs";

const Slug = ({ myBlog }) => {
  const [blog, setBlog] = useState(myBlog);
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Loading...</h1>
        </main>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Post Not Found</h1>
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Coder Hub. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{blog.title} - Coder Hub</title>
        <meta name="description" content={blog.content.substr(0, 140)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <section className={styles.blogPostContent}>
          <p className={styles.author}>By {blog.author}</p>
          <div className={styles.content}>
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Coder Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const files = await fs.promises.readdir("blogdata");
    const paths = files.map((file) => ({
      params: { slug: file.replace(".json", "") },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error reading blogdata directory for paths:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const data = await fs.promises.readFile(`blogdata/${params.slug}.json`, "utf-8");
    const blog = JSON.parse(data);
    return {
      props: {
        myBlog: {
          slug: params.slug,
          title: blog.Title || blog.title || "Untitled",
          content: blog.Content || blog.content || "",
          author: blog.Author || blog.author || "Anonymous",
        },
      },
    };
  } catch (error) {
    console.error(`Error loading blog post ${params.slug}:`, error);
    return {
      props: {
        myBlog: null,
      },
    };
  }
}

export default Slug;