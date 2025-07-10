import s from './LanguageSwitcher.module.scss';

export interface LanguageSwitcherProps {}

export default function LanguageSwitcher({}: LanguageSwitcherProps) {
  return (
    <div className={s.languageSwitcher}>
      <button type="button" className={s.btn}>
        EN
      </button>
      <button type="button" className={s.btn}>
        UA
      </button>
    </div>
  );
}
