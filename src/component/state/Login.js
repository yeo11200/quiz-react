import React from 'react';
import Header from '../_include/header';
import Footer from '../_include/footer';
import Content from '../content/index';
import { useSelector } from 'react-redux';

const Login = (props) => {

  const { themeStats } = useSelector(state => ({ themeStats: state.themeRedux }));

  return(
    <>
      <Header mode={themeStats.themeState} history={props.history}></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}
export default Login;
