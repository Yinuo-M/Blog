/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '../context/theme';
import { LanguageProvider } from '../context/language';
import ContextWrapper from '../context/contextWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
