import React from 'react'
import Hero from '../components/user/Hero'
import Header2 from '../components/header2/header2'
import { Container, Row, Col } from 'reactstrap';
import CarSearch from '../components/user/carSearch';
import carData from "../assets/data/carData";
import CarInfo from "../components/user/CarInfo";

const Home = () => {
  return (
    <Header2 title="Home">


      <section className='p-0 bannerSection'>
        <Hero />

        <div className='mainForm'>
          <Container>
            <Row className="formSection">

              <CarSearch />

            </Row>
          </Container>

        </div>

      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 2).map((item) => (
              <CarInfo item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>


            {carData.slice(0, 9).map((item) => (
              <CarInfo item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Header2>
  );
};

export default Home
/* HOW TO UNDERSTAND ROW, COL  https://react-bootstrap.github.io/layout/breakpoints/
https://getbootstrap.com/docs/4.0/utilities/flex/

*/