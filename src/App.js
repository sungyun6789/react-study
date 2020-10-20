import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import PageLocation from './component/PageLocation';
import Jsx from './component/JSX';
import PropsState from './component/PropsState';
import ArrayData from './component/Array';
import ReactRouter from './component/ReactRouter';
import Ref from './component/Ref';
import ReactEvent from './component/ReactEvent';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/propsstate">Props / State</Link>
        </li>
        <li>
          <Link to="/input">Input 상태관리를 사용한 계산기</Link>
        </li>
        <li>
          <Link to="/array">배열 데이터 랜더링 및 관리</Link>
        </li>
        <li>
          <Link to="/router">리액트 라우터</Link>
        </li>
        <li>
          <Link to="/ref">Ref</Link>
        </li>
        <li>
          <Link to="/reactevent">Event</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/jsx" exact={true} component={Jsx} />
      <Route path="/propsstate" exact={true} component={PropsState} />
      <Route path="/input" exact={true} component={About} />
      <Route path="/array" exact={true} component={ArrayData} />
      <Route path="/router" exact={true} component={ReactRouter} />
      <Route path="/ref" exact={true} component={Ref} />
      <Route path="/reactevent" exact={true} component={ReactEvent} />
      <br />
      <PageLocation />
    </div>
  );
}

export default App;