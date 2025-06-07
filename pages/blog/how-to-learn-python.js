import Head from 'next/head';
import Image from 'next/image';
import styles from '../../src/app/Blog.module.css'; // Adjust the path as necessary

const HowToLearnPython = () => {
  return (
    <>
      <Head>
        <title>How to Learn Python</title>
        <meta name="description" content="A comprehensive guide to learning Python programming." />
      </Head>
      <div className={styles.container}>
        <h1>How to Learn Python</h1>
        <p>
          Python is a versatile programming language used for web development, data analysis, artificial intelligence, scientific computing, and more.
        </p>
        <Image
          src="/path-to-python-image.jpg"
          alt="Python编程"
          width={600}
          height={400}
          className={styles.blogImage}
        />
        <p>
          Whether you're just starting out or looking to switch careers, learning Python can open up numerous opportunities.
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
          Practice regularly. Try to build small projects to apply what you've learned.
        </p>
      </div>
    </>
  );
};

export default HowToLearnPython;