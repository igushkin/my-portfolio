import {Link, NavLink} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HomeSVG from '../../assets/images/home.svg'
import ProjectsArray from "../Projects/ProjectsArray";
import FrontSkillsArray from "./FrontSkillsArray";
import {Card, CardBody, Flex} from "@chakra-ui/react";
import {CardFooter, CardHeader} from "react-bootstrap";

const About = () => {

    const frontSkills = FrontSkillsArray();
    console.log(frontSkills);

    return (
        <motion.div className="about-page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1}}
        >
            <Container className='home'>
                <Row>
                    <Col className='mt' sm={6}>
                        <h1 className='orange'>About me</h1>
                        <p className='green'>I’m a full-stack web developer and UX/UI enthusiast, living in Dublin,
                            Ireland.</p>
                        <p className='green'>I’m passionate about building intuitive and accessible web interfaces,
                            while writing clean, maintainable code.</p>
                        <p className='green'>I have done work in front-end and back-end web development, automation
                            testing, built WordPress websites and Machine Learning projects.</p>
                        <h1 className='orange'>Skills</h1>
                        <h2 className='white'>Front-End</h2>

                        <ul>
                            {frontSkills
                                .map((skill) => (
                                    <li key={skill.name}>
                                        <div className="wrapper">
                                            <div className="box">
                                                <img alt={skill.name} src={skill.img}/>
                                            </div>
                                            <span className="label">{skill.name}</span>
                                        </div>
                                    </li>
                                ))}
                        </ul>

                        < h2 className='white'>Back-End</h2>

                        <ul>
                            {frontSkills
                                .map((skill) => (
                                    <li key={skill.name}>
                                        <div className="wrapper">
                                            <div className="box">
                                                <img alt={skill.name} src={skill.img}/>
                                            </div>
                                            <span className="label">{skill.name}</span>
                                        </div>
                                    </li>
                                ))}
                        </ul>

                        <p className="txt-white">Have a question or would like to work together?
                            <span> </span>
                            <NavLink exact="true" activeclassname="active" to="/"><span>Contact me.</span>
                            </NavLink>
                        </p>
                    </Col>
                    <Col sm={6} className='img-container'>
                        <img src={HomeSVG}/>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default About
