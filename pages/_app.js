import App from 'next/app';
import React from 'react';
import withReactRouter from '../next/with-react-router';
import './styles.css';
import Routes from './routes';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
     );
  }
}

export default withReactRouter(MyApp);