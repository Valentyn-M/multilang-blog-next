import PostContent from '@/components/PostContent/PostContent';
import { SITE_TITLE } from '@/constants/site.config';
import { fetchPost } from '@/lib/fetchPost';
import { fetchPosts } from '@/lib/fetchPosts';

export const dynamic = 'auto';

export interface PostPageProps {
  readonly params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { id } = await params;
  const post = await fetchPost(id);
  return {
    title: `${SITE_TITLE} | ${post.title}`,
    description: post.body.slice(0, 160),
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await fetchPost(id);

  return <PostContent postData={post} />;
}
