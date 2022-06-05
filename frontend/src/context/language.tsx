import {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

type Props = {
  children: ReactNode;
};

type Language = 'chinese' | 'english';

type ContextValue = {
  language: Language;
  changeLanguage?: (language: Language) => void;
};

const LanguageContext = createContext<ContextValue>({ language: 'english' });

function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>('english');
  const changeLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, []);

  const contextValue = useMemo(
    () => ({ language, changeLanguage }),
    [language, changeLanguage],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
