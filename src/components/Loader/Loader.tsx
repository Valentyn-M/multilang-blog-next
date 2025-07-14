import s from './Loader.module.scss';
import { ChaoticOrbit } from 'ldrs/react';
import 'ldrs/react/ChaoticOrbit.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <ChaoticOrbit size="65" speed="1.5" color="#00adb5" />
    </div>
  );
}
