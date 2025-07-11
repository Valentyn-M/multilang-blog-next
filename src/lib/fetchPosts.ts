import { Post } from '@/types/post';

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
