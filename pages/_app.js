import { useEffect } from 'react';
import Script from 'next/script';
import NavBar from '@/components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="Plerdy" strategy="afterInteractive">
        {`
      function PlerdyScript() {
  const _protocol =
    'https:' == document.location.protocol ? 'https://' : 'http://';
  _site_hash_code = '64deaadeed87b36a303f733fdf231835';
  _suid = 45702;

  const plerdyScript = document.createElement('script');
  plerdyScript.setAttribute('defer', '');
  plerdyScript.dataset.plerdymainscript = 'plerdymainscript';
  plerdyScript.src =
    'https://d.plerdy.com/public/js/click/main.js?v=' + Math.random();

  const plerdymainscript = document.querySelector(
    "[data-plerdymainscript='plerdymainscript']"
  );
  if (plerdymainscript) {
    plerdymainscript.parentNode.removeChild(plerdymainscript);
  }

  try {
    document.head.appendChild(plerdyScript);
  } catch (error) {
    console.log(error, 'unable to add script tag');
  }
}
      `}
      </Script>
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
}
