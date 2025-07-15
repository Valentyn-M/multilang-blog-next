'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

interface GlobalErrorProps {
  readonly error: Error;
  readonly reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <ErrorMessage message={error.message} onRetry={reset} />;
      </body>
    </html>
  );
}
