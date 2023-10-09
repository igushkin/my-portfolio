import {NavLink} from 'react-router-dom'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "@chakra-ui/react";
import HomeSVG from '../../assets/images/home.svg'
import {Typewriter} from 'react-simple-typewriter';

const Home = () => {

    let typeSpeed = 80;
    let letters = 18;
    let delayFirst = typeSpeed * letters / 1000 + 0.3;
    let delaySecond = delayFirst + 0.7;

    const buttonStyle = {
        fontWeight: "400",
        padding: "7px 21px",
        fontSize: "0.9375rem",
        color: "#75BEFF",
        border: "1px solid rgba(117, 190, 255, 0.5)",
        backgroundColor: "transparent",
        textTransform: "uppercase",
    }

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
                        <p style={{maxWidth: 435}}>I enjoy utilizing modern technology to develop user-centric
                            applications.</p>
                        <p style={{maxWidth: 435}}>Got an idea I can help you with?
                            <span> </span>
                            <NavLink exact="true" activeclassname="active"
                                     to="/contact"><span>Contact me</span></NavLink>.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1, delay: delaySecond}}
                    >
                        <NavLink to="/my-projects">
                            <Button className="work" style={buttonStyle}>view my work</Button>
                        </NavLink>
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
