import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/BlogHero";
import styles from "./postSlug.module.css";
import { COMPONENT_MAP } from "@/helpers/mdx-components";

export async function generateMetadata({ params: { postSlug } }) {
  const { frontmatter } = await loadBlogPost(postSlug);
  return {
    title: frontmatter.title,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params: { postSlug } }) {
  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={COMPONENT_MAP}
        />
      </div>
    </article>
  );
}

export default BlogPost;
