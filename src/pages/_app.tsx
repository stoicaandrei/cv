import '../styles/globals.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import type { AppProps } from 'next/app';
import { FirebaseProvider } from 'contexts/FirebaseContext';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(fas);
library.add(fab);

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <div className="min-w-screen min-h-screen bg-gray-100">
        <Component {...pageProps} />
      </div>
    </FirebaseProvider>
  );
}

export default MyApp;
