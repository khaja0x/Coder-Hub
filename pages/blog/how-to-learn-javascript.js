import Head from 'next/head';
import styles from '../../src/app/Blog.module.css'; // Adjust the path as necessary

const HowToLearnJavascript = () => {
  return (
    <>
      <Head>
        <title>How to Learn JavaScript</title>
        <meta name="description" content="Learn how to code in JavaScript" />
      </Head>
      <div className={styles.container}>
        <h1>How to Learn JavaScript</h1>
        <p>
          JavaScript is a language used to design for the web. It's one of the core technologies of the web, alongside HTML and CSS.
        </p>
        {/* Add more content as needed */}
      </div>
    </>
  );
};

export default HowToLearnJavascript;