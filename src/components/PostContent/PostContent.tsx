import s from './PostContent.module.scss';
import { Post } from '@/types/post';
import Image from 'next/image';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';

export interface PostContentProps {
  readonly postData: Post;
}

export default function PostContent({ postData }: PostContentProps) {
  const { title, body } = postData;

  return (
    <ContentWrapper>
      <h1 className={s.title}>{title}</h1>
      <Image
        src="/images/post/image.jpg"
        alt={title}
        width={1140}
        height={885}
        priority
        className={s.img}
      />
      <div className={s.body}>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
      </div>
    </ContentWrapper>
  );
}
