import MainTitle from '@/components/MainTitle/MainTitle';
import s from './AboutContent.module.scss';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import ContentBody from '@/components/ContentBody/ContentBody';
import { Dictionary } from '@/lib/getDictionary';

export interface AboutContentProps {
  readonly dict: Dictionary;
}

export default function AboutContent({ dict }: AboutContentProps) {
  return (
    <ContentWrapper>
      <MainTitle>{dict.about}</MainTitle>
      <ContentBody>
        <p>{dict.aboutPage.intro}</p>
        <p>{dict.aboutPage.team}</p>
        <p>{dict.aboutPage.mission}</p>
        <p>{dict.aboutPage.open}</p>
        <p>{dict.aboutPage.thanks}</p>
      </ContentBody>
    </ContentWrapper>
  );
}
