import PostItem from '@/components/PostItem/PostItem';
import s from './PostList.module.scss';
import { Post } from '@/types/post';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

export interface PostListProps {
  readonly posts: Post[];
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function PostList({ posts, dict, lang }: PostListProps) {
  return (
    <ul className={s.postList}>
      {posts.map((post, index) => (
        <li key={post.id} className={s.postItem}>
          <PostItem
            postData={post}
            priority={index < 6}
            lang={lang}
            dict={dict}
          />
        </li>
      ))}
    </ul>
  );
}
