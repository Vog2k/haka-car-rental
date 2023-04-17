import React from 'react'
import Hero from '../components/user/Hero'
import Header2 from '../components/header2/header2'
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
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

        <div className='p-0 mainForm'>
        <CarSearch />
          <Container>
            <Row className="formSection">
              
            </Row>
          </Container>

        </div>

      </section>
      
      <div className='sectionColor'>
        <Container>
          <Row>

            <div className='mainCarsAd1'>

            {carData.slice(0, 2).map((item) => (
              <CarInfoDup item={item} key={item.id} />
            ))}</div>
          </Row>
        </Container>
      </div>
      <div className='sectionColor'>
        <Container>
          <Row>
          <h1 className="section3">Popular street cars</h1>

            {carData.slice(2, 5).map((item) => (
              <CarInfo item={item} key={item.id} />
            ))}

          </Row>
          <Row>
          <h1 className="section3">Recommended cars</h1>

            {carData.slice(5, 8).map((item) => (
              <CarInfo item={item} key={item.id} />
            ))}

            </Row>
            
          <div className='move w-100 d-flex justify-content-center'>
            <button className=" w-25 carItem-btn3  d-flex d-flex justify-content-center">
            <Link to= '/cars'>View more</Link>
          </button></div>  {/*BUTTON*/}
        </Container>
        
        </div>
        
      {/*INFORMATIN SECTION NEEDS TO BE ADDED*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section2">More information</h6>
              <h2 className="section1">Need to know</h2>
            </Col>
              
            <Info />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section2">What our clients have said</h6>
              <h2 className="section1">Testimonials</h2>
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