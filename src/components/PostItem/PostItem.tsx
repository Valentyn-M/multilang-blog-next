import { Post } from '@/types/post';
import s from './PostItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Dictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

export interface PostItemProps {
  readonly postData: Post;
  readonly priority?: boolean;
  readonly dict: Dictionary;
  readonly lang: Locale;
}

export default function PostItem({
  postData,
  priority = false,
  dict,
  lang,
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
        <Link href={`/${lang}/posts/${id}`} className={s.link}>
          {dict.readMore}
        </Link>
      </div>
    </article>
  );
}
