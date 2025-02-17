import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import styles from "./homepage.module.css";

export const metadata = {
  title: 'Bits & Bytes',
  description: 'A wonderful blog about JavaScript',
};

async function Home() {
  const blogPosts = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPosts.map((post) => (
        <BlogSummaryCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          abstract={post.abstract}
          publishedOn={post.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
