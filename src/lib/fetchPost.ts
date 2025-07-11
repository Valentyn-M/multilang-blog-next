import { Post } from '@/types/post';

export async function fetchPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}
