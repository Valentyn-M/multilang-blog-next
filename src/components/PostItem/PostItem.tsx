import { Post } from '@/types/post';
import s from './PostItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export interface PostItemProps {
  readonly postData: Post;
  readonly priority?: boolean;
}

export default function PostItem({
  postData,
  priority = false,
}: PostItemProps) {
  const { title, id } = postData;

  return (
    <article className={s.article}>
      <Image
        src="/images/posts/image.jpg"
        alt={title}
        width={380}
        height={285}
        priority={priority}
        className={s.img}
      />
      <div className={s.textBlock}>
        <h2 className={s.title}>{title}</h2>
        <Link href={`/posts/${id}`} className={s.link}>
          Read more
        </Link>
      </div>
    </article>
  );
}
