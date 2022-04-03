import '../styles/globals.css';
import 'config/fonts';
import type { AppProps } from 'next/app';

import 'lib/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
