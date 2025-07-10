import PostList from '@/components/PostList/PostList';
import s from './Posts.module.scss';
import { Post } from '@/types/post';

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export interface PostsProps {}

export default async function Posts({}: PostsProps) {
  const posts = await getPosts();

  return (
    <section className={s.posts}>
      <div className="container">
        <h1 className={s.title}>All Posts</h1>
        <PostList posts={posts} />
      </div>
    </section>
  );
}
