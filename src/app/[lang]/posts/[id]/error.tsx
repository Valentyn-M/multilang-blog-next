'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

interface PostErrorProps {
  readonly error: Error;
  readonly reset: () => void;
}

export default function PostError({ error, reset }: PostErrorProps) {
  return <ErrorMessage message={error.message} onRetry={reset} />;
}
