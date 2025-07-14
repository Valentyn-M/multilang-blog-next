import PostList from '@/components/PostList/PostList';
import s from './Posts.module.scss';
import { Post } from '@/types/post';
import MainTitle from '@/components/MainTitle/MainTitle';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

export interface PostsProps {
  readonly posts: Post[];
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default async function Posts({ posts, dict, lang }: PostsProps) {
  return (
    <section className={s.posts}>
      <div className="container">
        <MainTitle>{dict.allPostsTitle}</MainTitle>
        <PostList posts={posts} lang={lang} dict={dict} />
      </div>
    </section>
  );
}
