import Container from "react-bootstrap/esm/Container";
import Header from "../Header";
import Col from "react-bootstrap/esm/Col";
import line_pattern from '../../assets/images/line_pattern.png';
import Row from "react-bootstrap/esm/Row";
import banner from '../../assets/images/banner.png';
import text_star from '../../assets/images/text_star.png';
import star from '../../assets/images/star.png';
import Button from 'react-bootstrap/Button';
import dream_house from '../../assets/images/dream_house.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import project from '../../assets/images/project.png';
import qulity_sec from '../../assets/images/qulity_sec.png';

function Home() {
  return (
    <>
      <Header />
      <section className="banner">
        <Container>
          <Col md={10} lg={10}>
            <div>
              <h1>Experience the epitome of home comfort</h1>
            </div>
          </Col>
          <Row>
            <Col md={5} lg={5}>
              <div>
                <p>Our international brand specializes in property appraisal,
                  sales, purchases, and investments. Trust us to deliver
                  exceptional service and help you find your perfect real
                  estate opportunity.
                </p>
                <img className="star-text" src={text_star} />
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="banner-bg">
                <img src={banner} />
                <div className="img-after">
                </div>
                <FontAwesomeIcon className="icon-style" icon={faArrowUp} />
              </div>
            </Col>
          </Row>
        </Container>
        <img className="line-patt" src={line_pattern} />
      </section>
      <section className="about">
        <Container>
          <Row>
            <Col md={4} lg={4}>
              <div className="star-image">
                <img src={star} /> <span>About Us</span>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div>
                <h2>We've found luxury homes for clients for a decade.</h2>
                <p>We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer. Our genuine care for customer satisfaction is what sets us apart.</p>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div>
                <p>We take great pride in ensuring the satisfaction of our
                  customers. That's why we proudly guarantee the quality
                  and reliability of our products.
                </p>
                <Button>Get Started</Button>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <h1>sfr</h1>
            </Col>
            <Col md={11} lg={11}>
              <div className="about-bg">
                <img src={dream_house} />
                <h3 className="h3-s">Dream house</h3>
                <div className="about-after">
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="project-sec">
        <Container>
          <Row>
            <Col md={4} lg={4}>
              <div className="star-image">
                <img src={star} /> <span>About Us</span>
              </div>
            </Col>
            <Col md={4} lg={4}>
            </Col>
            <Col md={4} lg={4}>
              <div>
                <p>
                  Together, we can conquer challenges, utilize our strengths, and achieve remarkable success in this ambitious home project.
                </p>
              </div>
            </Col>
            <Col md={12} lg={12}>
              <div className="hexa-img">
                <img src={project} />
              </div>
              <div className="icon-p">
                <FontAwesomeIcon className="project-icon" icon={faArrowLeft} />
                <FontAwesomeIcon className="project-icon" icon={faArrowRight} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="quality">
        <Container>
          <Col md={4} lg={4}>
            <div className="star-image">
              <img src={star} /> <span>Our Quality</span>
            </div>
          </Col>
          <div className="qulity-image">
            <Row>
              <Col md={4} lg={4}>
                <div>
                  <h2>
                    Design a cozy and fresh interior.
                  </h2>
                  <p>
                    Crafting an Inviting Haven: Unveiling the Art of Designing a Cozy and Fresh Interior for Unmatched Comfort and Serenity
                  </p>
                  <Button>Get Started</Button>
                </div>
              </Col>
              <Col md={4} lg={4}>
                <div>
                  <img src={qulity_sec} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );

} export default Home;