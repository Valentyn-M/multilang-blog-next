import s from './PostContent.module.scss';
import { Post } from '@/types/post';
import Image from 'next/image';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import MainTitle from '@/components/MainTitle/MainTitle';
import ContentBody from '@/components/ContentBody/ContentBody';

export interface PostContentProps {
  readonly postData: Post;
}

export default function PostContent({ postData }: PostContentProps) {
  const { title, body } = postData;

  return (
    <ContentWrapper>
      <MainTitle>{title}</MainTitle>
      <ContentBody>
        <Image
          src="/images/post/image.jpg"
          alt={title}
          width={1140}
          height={885}
          priority
          className={s.img}
        />
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
        <p>{body}.</p>
      </ContentBody>
    </ContentWrapper>
  );
}
