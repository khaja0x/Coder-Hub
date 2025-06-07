import Head from 'next/head';
import styles from '../../src/app/Blog.module.css'; // Adjust the path as necessary

const HowToLearnReact = () => {
  return (
    <>
      <Head>
        <title>How to Learn React</title>
        <meta name="description" content="Learn how to build user interfaces with React" />
      </Head>
      <div className={styles.container}>
        <h1>How to Learn React</h1>
        <p>
          React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies.
        </p>
        {/* Add more content as needed */}
      </div>
    </>
  );
};

export default HowToLearnReact;