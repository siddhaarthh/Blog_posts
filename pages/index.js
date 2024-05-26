import { useState } from 'react';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPostsData.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <section className={styles.blogList}>
        {filteredPosts.map(({ id, title, date, summary }) => (
          <div key={id} className={styles.blogItem}>
            <h2>
              <Link style={{color:"#201d7f"}} href={`/posts/${id}`}>
                {title}
              </Link>
            </h2>
            <p>{summary}</p>
            <small>{date}</small>
          </div>
        ))}
      </section>
    </Layout>
  );
}
