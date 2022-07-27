import '../styles/globals.css';
import 'config/fonts';
import type { AppProps } from 'next/app';

import 'lib/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
}

export default MyApp;
