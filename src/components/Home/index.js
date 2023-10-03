import {Link, NavLink} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HomeSVG from '../../assets/images/home.svg'
import {Typewriter, Cursor} from 'react-simple-typewriter';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

    let typeSpeed = 80;
    let letters = 18;
    let delayFirst = typeSpeed * letters / 1000 + 0.3;
    let delaySecond = delayFirst + 0.7;

    return (

        <Container className='home'>
            <Row>
                <Col className='mt' sm={6}>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1}}
                    >
                        <h1 className="txt-white">Hi, I'm Mark</h1>
                        <h1 className="txt-yellow">
                            <Typewriter
                                words={['Back-End Developer', 'Java Developer', 'C# Developer']}
                                loop
                                cursor
                                typeSpeed={typeSpeed}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1, delay: delayFirst}}
                    >
                        <p className="txt-white" style={{maxWidth: 425}}>I love building responsive and functional
                            websites and web applications.</p>
                        <p className="txt-white" style={{maxWidth: 425}}>Got an idea I can help you with?
                            <span> </span>
                            <NavLink exact="true" activeclassname="active" to="/"><span>Contact me.</span>
                            </NavLink>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1, delay: delaySecond}}
                    >
                        <Button variant="outline-primary">view my work</Button>{' '}
                    </motion.div>
                </Col>
                <Col sm={6} className='img-container'>
                    <img src={HomeSVG}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
