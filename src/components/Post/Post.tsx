import s from './Post.module.scss';
import { Post } from '@/types/post';

export interface PostProps {
  postData: Post;
}

export default function Post({ postData }: PostProps) {
  const { title, body } = postData;
  return (
    <section className={s.post}>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}
