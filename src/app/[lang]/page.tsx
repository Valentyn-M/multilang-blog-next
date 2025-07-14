import Posts from '@/components/Posts/Posts';
import { fetchPosts } from '@/lib/fetchPosts';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n-config';

interface HomePageProps {
  readonly params: Promise<{ lang: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const posts = await fetchPosts();

  return <Posts posts={posts} lang={lang} dict={dict} />;
}
