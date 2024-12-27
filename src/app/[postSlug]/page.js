import { loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogHero from '@/components/BlogHero';
import styles from './postSlug.module.css';


async function BlogPost( 
  {params: { postSlug }}
) {

  const { frontmatter, content } = await loadBlogPost(
    postSlug
  );

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;
