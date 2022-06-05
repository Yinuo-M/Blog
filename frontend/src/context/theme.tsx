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

type Theme = 'light' | 'dark';

type ContextValue = {
  theme: Theme;
  changeTheme?: (theme: Theme) => void;
};

const ThemeContext = createContext<ContextValue>({ theme: 'light' });

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('light');
  const changeTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  const contextValue = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
