import React from 'react';
import Head from './airbnb/component/Header';
import Menu from './airbnb/component/Menu';
import AirbnbBody from './airbnb/component/Body';
import SecondBody from './airbnb/component/SecondBody';
import Box from './airbnb/component/Box';

const App = () => {
  return (
    <div>
      <Head />
      <Menu />
      <AirbnbBody />
      <Box />
      <SecondBody />
    </div>
  );
}

export default App;