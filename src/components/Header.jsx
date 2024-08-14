import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo_m from '../assets/images/logo_m.png';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <section className='header-sec'>
                <Container>
                    <div className='header-bg'>
                        <Row>
                            <Col md={4} lg={4}>
                                <div>
                                    <img src={logo_m} /> <span> SM Builders</span>
                                </div>
                            </Col>
                            <Col md={4} lg={4}>
                                <div className='navbar-style'>
                                    <ul>
                                        <li><Link>Home</Link></li>
                                        <li><Link>Properties</Link></li>
                                        <li><Link>Buy</Link></li>
                                        <li><Link>Sell</Link></li>
                                        <li><Link>Rent</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4} lg={4}>
                                <div className='nav-btn'>
                                    <ul>
                                        <li><Link>Login</Link></li>
                                        <li><Link>Signup</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

        </>
    );
} export default Header;