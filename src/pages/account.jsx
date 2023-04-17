import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Header2 from '../components/header2/header2';
import AccountPage from '../components/user/accountForm';
import AccountBanner from '../components/user/accountBanner';
import NotInService from '../components/user/NotInService';


const Account = () => {
  return (
    <Header2 title="Home">
        <AccountBanner />
          <Container className="text-center">
              <Row>
                <Col>
                  <NotInService/>
                  <h2></h2>
                  <AccountPage/>
                </Col>
              </Row>
          </Container>

    </Header2>
  );
};

export default Account;

/*

function Account(){ 
  
  const getFormData = function (name, number) {
  console.log('Name: ', name, 'Number: ', number)
  }
  return (
<Header2 title="Home">

<div className="App">
			<header className="App-header">
				<Booking sendFormData={getFormData} />
			</header>
		</div>
</Header2>
  );
};


*/