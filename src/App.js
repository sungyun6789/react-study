import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import PageLocation from './PageLocation';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <PageLocation />
    </div>
  );
}

export default App;