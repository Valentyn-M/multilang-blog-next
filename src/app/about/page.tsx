import { SITE_TITLE } from '@/constants/site.config';

export const metadata = {
  title: `${SITE_TITLE} | About`,
  description: 'Learn more about our multilingual blog project.',
};

export interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  return (
    <>
      <h1>About us</h1>
      <p>This is a static page about the project.</p>
      <p>Проста сторінка з будь-яким текстом про уявну команду чи проєкт.</p>
    </>
  );
}
