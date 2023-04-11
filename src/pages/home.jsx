import React from 'react'
import Hero from '../components/user/Hero'
import Header2 from '../components/header2/header2'
import { Container, Row, Col } from 'reactstrap';
import CarSearch from '../components/user/carSearch';
import carData from "../assets/data/carData";
import CarInfo from "../components/user/CarInfo";
import CarInfoDup from '../components/user/CarInfoDup';
import Testimonial from '../components/user/Testimonials';
import Info from '../components/user/information';

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
            <Col lg="12" className="text-center mb-6">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            <div className='mainCarsAd1'>

            {carData.slice(0, 2).map((item) => (
              <CarInfoDup item={item} key={item.id} />
            ))}</div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>


            {carData.slice(2, 11).map((item) => (
              <CarInfo item={item} key={item.id} />
            ))}

          </Row>
        </Container>
      </section>
      {/*INFORMATIN SECTION NEEDS TO BE ADDED*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">More information</h6>
              <h2 className="section__title">Need to know</h2>
            </Col>
              
            <Info />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">What our clients have said</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
    </Header2>
  );
};
/*NEED TO SHIFT THE BOTTEM FOOTER MENU OVER */
export default Home








/* HOW TO UNDERSTAND ROW, COL  https://react-bootstrap.github.io/layout/breakpoints/
https://getbootstrap.com/docs/4.0/utilities/flex/

*/