import { API_POSTS_ENDPOINT } from '@/constants/site.config';
import { Post } from '@/types/post';

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API_POSTS_ENDPOINT}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
