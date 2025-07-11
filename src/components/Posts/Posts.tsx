import PostList from '@/components/PostList/PostList';
import s from './Posts.module.scss';
import { Post } from '@/types/post';

export interface PostsProps {
  posts: Post[];
}

export default async function Posts({ posts }: PostsProps) {
  return (
    <section className={s.posts}>
      <div className="container">
        <h1 className={s.title}>All Posts</h1>
        <PostList posts={posts} />
      </div>
    </section>
  );
}
