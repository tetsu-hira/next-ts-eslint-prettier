// pages/_app.tsx
// Tailwind CSS 以外のスタイルファイルはグローバルで適用したくないため削除
// import '../styles/globals.css'
// 追記
import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
    </div>
  );
}
export default MyApp;
