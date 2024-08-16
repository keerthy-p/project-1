import Container from "react-bootstrap/esm/Container";
import logo_m from '../assets/images/logo_m.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <section className="footer-sec">
                <Container>
                    <div className="footer-list">
                        <img src={logo_m} /> <span> SM Builders</span>
                        <p>We take great pride in ensuring the satisfaction <br /> of our customers, which </p>
                        <ul>
                            <li><Link><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li><Link><FontAwesomeIcon icon={faTwitter} /></Link></li>
                            <li><Link><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                            <li><Link><FontAwesomeIcon icon={faInstagramSquare} /></Link></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="footer-nav">
                        <ul>
                            <li><Link>Home</Link></li>
                            <li className="border-li"><Link>About</Link></li>
                            <li className="border-li"><Link>Properties</Link></li>
                            <li className="border-li"><Link>Blog</Link></li>
                            <li className="border-li"><Link>Pricing</Link></li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    );
} export default Footer;