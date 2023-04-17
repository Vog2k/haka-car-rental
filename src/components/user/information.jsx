import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/information.css"
import { Link } from "react-router-dom";

import img1 from "../../assets/figmaImages/cars-img/pexels-negative-space-97079.jpg"
import img2 from "../../assets/figmaImages/cars-img/pexels-mihis-alex-21014.jpg"
import img3 from "../../assets/figmaImages/cars-img/pexels-viktor-lundberg-754595.jpg"

const Info = () => {
  return (
    <Container>
      <Row>
      <div className="d-flex flex-row">
        <Col>

        <div className="col1">        
        <h3>Prepear for anything</h3>
          <h6>Tips and tricks</h6>
        <img src={img1} alt="Reciving car keys"/>

          <p>Rent a car or campervan: New Zealand has a lot of beautiful sights to see that are spread out, so having a car or campervan will give 
          you the flexibility to explore at your own pace.
          <br></br><br></br>
          Pack for all weather conditions: New Zealand's weather can be unpredictable, so it's a good idea to bring clothing that can accommodate 
          different temperatures and weather conditions.
          <br></br><br></br>
          Don't underestimate driving times: Even though New Zealand is a relatively small country, driving times can be longer than expected due 
          to winding roads and hilly terrain.
          <br></br><br></br>
          Take advantage of free activities: New Zealand has plenty of free activities, including hiking, beachcombing, and visiting public parks.
          <br></br><br></br>
          Respect the environment: New Zealand is known for its stunning natural beauty, so be sure to respect the environment by not littering, staying on marked trails, and following Leave No Trace principles</p>
          <button className="InfoButton"><Link to="/cars">E­xplore Now</Link></button>
              </div>
            </Col>
        <Col>
        <div className="col1">
        <h3>Popular destinations</h3>
        <h6>Where to go?</h6>
        <img src={img3} alt="Lander rover in a lavender feild" />

          <p>Milford Sound: Known as the "eighth wonder of the world," Milford Sound is a stunning fjord located in Fiordland National Park.
          <br></br><br></br>
            Mount Cook National Park: Home to New Zealand's highest mountain, Mount Cook National Park offers scenic hiking trails, glacier tours, and stargazing opportunities.
            <br></br><br></br>
            Queenstown: Known as the "adventure capital of the world," Queenstown offers a range of adrenaline-pumping activities like bungee jumping, skydiving, and jet boating.
            <br></br><br></br>
            Tongariro National Park: Located in the North Island, Tongariro National Park is a UNESCO World Heritage Site that features stunning volcanic landscapes and hiking trails.
            <br></br><br></br>
            Bay of Islands: Located in the North Island, the Bay of Islands is a popular destination for sailing, fishing, and dolphin watching.</p>
            <button className="InfoButton">
              <Link to="/cars">E­xplore Now</Link>
            </button></div> </Col>
           
           <Col>
           <div className="col1">
          <h3>About New Zealand</h3>
          <h6>Facts about NZ</h6>
        <img src={img2} alt="Small toy car on a map" />

          <p>New Zealand is located in the southwestern Pacific Ocean, southeast of Australia.
            <br></br><br></br>
            New Zealand is comprised of two main islands, the North Island and the South Island, as well as many smaller islands.
            <br></br><br></br>
            The population of New Zealand is around 5 million people, with the majority living in urban areas.
            <br></br><br></br>
            The official languages of New Zealand are English, Maori, and New Zealand Sign Language.
            <br></br><br></br>
            The currency of New Zealand is the New Zealand dollar (NZD).
            New Zealand is known for its stunning natural beauty, which includes fjords, mountains, glaciers, beaches, and geothermal hot springs.
            <br></br><br></br>
            New Zealand is home to many unique animals, including the kiwi bird, the tuatara reptile, and the Hector's dolphin.
            <br></br><br></br>
            New Zealand is also famous for its wine industry, particularly its Sauvignon Blanc.</p>

            <button className="InfoButton">
              <Link to="/cars">E­xplore Now</Link>
            </button>
        </div></Col>
      </div></Row>
    </Container>
  );
};
  
  export default Info;