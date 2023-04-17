import React from 'react'

import LoginPage from '../components/user/loginPage';
import { Container, Row, Col } from "reactstrap";
import Header2 from '../components/header2/header2';

import LoginBanner from '../components/user/loginBanner';

const Login = () => {
  return (
<Header2 title="Home">

<LoginBanner/>
<LoginPage />

</Header2>
  );
};

export default Login