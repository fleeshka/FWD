import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import './style.css';

const App: React.FC = () => (
  <>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </>
);

export default App;
