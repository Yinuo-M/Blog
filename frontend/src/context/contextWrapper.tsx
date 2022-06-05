import { useContext, ReactNode } from 'react';
import { ThemeContext } from './theme';
import { LanguageContext } from './language';

type Props = {
  children: ReactNode;
};

export default function ContextWrapper({ children }: Props) {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  return (
    <div className={`${theme.theme}-theme ${language.language}-language`}>
      {children}
    </div>
  );
}
