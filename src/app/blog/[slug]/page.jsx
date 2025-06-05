import { notFound } from "next/navigation";
import BlogPost from "../../../../components/blog-post";
import { getAllBlogSlugs, getBlogPost } from "../../../../lib/blog-data";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
