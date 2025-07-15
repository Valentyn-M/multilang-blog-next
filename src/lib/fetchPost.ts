import { API_POSTS_ENDPOINT } from '@/constants/site.config';
import { Post } from '@/types/post';

export async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`${API_POSTS_ENDPOINT}/${id}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}
