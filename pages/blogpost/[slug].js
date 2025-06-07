import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../src/app/page.module.css"; // Fixed the import path
import * as fs from "fs";

// Helper function to render content with basic Markdown support
const renderContent = (content) => {
  const lines = content.split("\n");
  return lines.map((line, index) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className={styles.contentHeading}>
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      return (
        <h2 key={index} className={styles.contentHeading}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.trim() === "") {
      return null; // Skip empty lines
    } else {
      return <p key={index}>{line}</p>;
    }
  });
};

const Slug = ({ myBlog }) => {
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

  if (!myBlog) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Post Not Found</h1>
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
        </main>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Hunting Coder. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{myBlog.title} - Hunting Coder</title>
        <meta name="description" content={myBlog.content.substr(0, 140)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${myBlog.title} - Hunting Coder`} />
        <meta property="og:description" content={myBlog.content.substr(0, 140)} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{myBlog.title}</h1>
        <section className={styles.blogPostContent}>
          <p className={styles.author}>By {myBlog.author}</p>
          <div className={styles.content}>{renderContent(myBlog.content)}</div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Hunting Coder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export async function getStaticPaths() {
  let paths = [];
  try {
    const files = await fs.promises.readdir("blogdata");
    paths = files.map((file) => ({
      params: { slug: file.replace(".json", "") },
    }));
    if (paths.length === 0) {
      console.warn("No blog posts found in blogdata directory.");
    }
  } catch (error) {
    console.error("Error reading blogdata directory for paths:", error.message);
  }
  return {
    paths,
    fallback: true,
  };
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
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error(`Error loading blog post ${params.slug}:`, error.message);
    return {
      props: {
        myBlog: null,
      },
      revalidate: 60,
    };
  }
}

export default Slug;