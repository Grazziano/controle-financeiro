import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>
  );
}
