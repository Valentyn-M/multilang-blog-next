import clsx from 'clsx';
import s from './PostContent.module.scss';
import { Post } from '@/types/post';

export interface PostContentProps {
  readonly postData: Post;
}

export default function PostContent({ postData }: PostContentProps) {
  const { title, body } = postData;

  return (
    <section className={clsx(s.postContent, 'container')}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.body}>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
      </div>
    </section>
  );
}
