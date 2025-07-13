import { redirect } from 'next/navigation';

export default function Root404() {
  redirect('/en/not-found');
}
