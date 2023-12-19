import { useEffect } from 'react';
import Script from 'next/script';
import NavBar from '@/components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="./api/PlerdyScript.js" />
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
}
