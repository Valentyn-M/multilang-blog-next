import { svgIcon } from '@/app/layout';
import s from './Logo.module.scss';

export interface LogoProps {}

export default function Logo({}: LogoProps) {
  return (
    <div className={s.logo}>
      <svg className={s.logoIcon}>
        <use href={`${svgIcon}#icon-logo`} />
      </svg>
      <span>Mini-Blog</span>
    </div>
  );
}
