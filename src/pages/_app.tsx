import { ThemeProvider } from '@material-tailwind/react';
import { AppProps } from 'next/app';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import '../App.css';
import { store } from '../services/store';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  </ThemeProvider>
);

export default App;
