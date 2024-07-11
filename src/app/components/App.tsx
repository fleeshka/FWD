import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import '../../styles/global.css';

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
