import PostList from '@/components/PostList/PostList';
import s from './Posts.module.scss';
import { Post } from '@/types/post';
import MainTitle from '@/components/MainTitle/MainTitle';

export interface PostsProps {
  readonly posts: Post[];
}

export default async function Posts({ posts }: PostsProps) {
  return (
    <section className={s.posts}>
      <div className="container">
        <MainTitle>All Posts</MainTitle>
        <PostList posts={posts} />
      </div>
    </section>
  );
}
