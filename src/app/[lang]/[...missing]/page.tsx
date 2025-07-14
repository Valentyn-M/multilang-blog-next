import { notFound } from 'next/navigation';

export default function NotFoundCatchAll() {
  notFound(); // redirect to app/[lang]/not-found.tsx
}
