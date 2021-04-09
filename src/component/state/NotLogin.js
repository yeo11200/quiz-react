import React from 'react';
import { Join, Login } from '../content/Main';

const NotLogin = (props) => {
  const nowPath = props.location.pathname;
  return(
    <>
      <div>Quiz-Js</div>
      { nowPath.indexOf('join') > -1 ? <Join history={history} /> : <Login history={history} /> }
    </>
  ) 
}

export default NotLogin;