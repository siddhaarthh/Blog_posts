import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/Layout';
import styles from '../../styles/post.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article className={styles.postContainer}>
        <h1 className={styles.postTitle}>{postData.title}</h1>
        <div className={styles.postMeta}>
          <span>By {postData.author}</span> | <span>{postData.date}</span>
        </div>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
