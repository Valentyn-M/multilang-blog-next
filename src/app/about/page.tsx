export const metadata = {
  title: 'About | Mini-blog',
  description: 'Learn more about our multilingual blog project.',
};

export interface AboutPageProps {}

export default function AboutPage({}: AboutPageProps) {
  return (
    <>
      <h1>About us</h1>
      <p>This is a static page about the project.</p>
    </>
  );
}
