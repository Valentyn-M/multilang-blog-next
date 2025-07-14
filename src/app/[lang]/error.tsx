'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import { useEffect } from 'react';

interface GlobalErrorPageProps {
  readonly error: Error;
  readonly reset: () => void;
}

export default function GlobalErrorPage({
  error,
  reset,
}: GlobalErrorPageProps) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return <ErrorMessage message={error.message} onRetry={reset} />;
}
