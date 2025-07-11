import AboutContent from '@/components/AboutContent/AboutContent';
import { SITE_TITLE } from '@/constants/site.config';

export const metadata = {
  title: `${SITE_TITLE} | About`,
  description: 'Learn more about our multilingual blog project.',
};

export interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  return <AboutContent />;
}
