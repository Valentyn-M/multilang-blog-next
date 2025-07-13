'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return <ErrorMessage message={error.message} onRetry={reset} />;
}
