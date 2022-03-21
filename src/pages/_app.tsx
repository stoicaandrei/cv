import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'contexts/AuthContext';
import { FirebaseProvider } from 'contexts/FirebaseContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <div className="min-h-screen min-w-screen bg-gray-100">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default MyApp;
