import PostItem from '@/components/PostItem/PostItem';
import s from './PostList.module.scss';
import { Post } from '@/types/post';

export interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className={s.postList}>
      {posts.map((post, index) => (
        <li key={post.id} className={s.postItem}>
          <PostItem postData={post} priority={index < 6} />
        </li>
      ))}
    </ul>
  );
}
