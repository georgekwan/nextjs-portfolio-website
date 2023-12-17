import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import PlerdyScript from './api/PlerdyScript';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    PlerdyScript();
  }, []);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
}
