import React from 'react';
import Head from './airbnb/component/Header';
import Menu from './airbnb/component/Menu';
import AirbnbBody from './airbnb/component/Body';
import SecondBody from './airbnb/component/SecondBody';
import Box from './airbnb/component/Box';
import Footer from './airbnb/component/Footer';

const App = () => {
  return (
    <div>
      <Head />
      <Menu />
      <AirbnbBody />
      <Box />
      <SecondBody />
      <Footer />
    </div>
  );
}

export default App;