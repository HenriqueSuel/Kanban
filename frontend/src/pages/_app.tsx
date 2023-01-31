import { GlobalStyle, theme } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';

export default function App({ Component, pageProps }: AppProps) {

  Modal.setAppElement('#app');

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

      </ThemeProvider>
    </>
  )
}
