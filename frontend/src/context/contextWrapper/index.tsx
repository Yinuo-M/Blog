import { useContext, ReactNode } from 'react';

import { ThemeContext } from '../theme';
import { LanguageContext } from '../language';
import styles from './contextWrapper.module.scss';

type Props = {
  children: ReactNode;
};

export default function ContextWrapper({ children }: Props) {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`${styles[theme]} ${styles[language]}`}>{children}</div>
  );
}
