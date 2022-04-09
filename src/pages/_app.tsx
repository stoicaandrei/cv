import '../styles/globals.css';
import 'config/fonts';
import type { AppProps } from 'next/app';

import 'lib/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
