import React from 'react';
import Head from './airbnb/component/Header';
import Menu from './airbnb/component/Menu';
import AirbnbBody from './airbnb/component/Body';

const App = () => {
  return (
    <div>
      <Head />
      <Menu />
      <AirbnbBody></AirbnbBody>
    </div>
  );
}

export default App;