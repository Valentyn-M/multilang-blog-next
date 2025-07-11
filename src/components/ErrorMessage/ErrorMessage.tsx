import clsx from 'clsx';
import s from './ErrorMessage.module.scss';

export interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  message = 'Something went wrong :(',
  onRetry,
}: ErrorMessageProps) {
  return (
    <section className={clsx(s.errorMessage, 'container')}>
      <h1 className={s.title}>Oops!</h1>
      <p className={s.message}>{message}</p>
      {onRetry && (
        <button className={s.btn} onClick={onRetry}>
          Try again
        </button>
      )}
    </section>
  );
}
