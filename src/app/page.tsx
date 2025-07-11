import Posts from '@/components/Posts/Posts';
import { fetchPosts } from '@/lib/fetchPosts';

export default async function HomePage() {
  const posts = await fetchPosts();

  return <Posts posts={posts} />;
}
