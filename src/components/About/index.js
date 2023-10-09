import {NavLink} from 'react-router-dom'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeSVG from '../../assets/images/about1.svg'
import SkillsArray from "./SkillsArray";

const About = () => {

    const frontSkills = SkillsArray("/content/FrontEndSkills.md");
    const backSkills = SkillsArray("/content/BackEndSkills.md");

    let typeSpeed = 80;
    let letters = 18;
    let delayFirst = 0.5;
    let delaySecond = delayFirst + 0.7;

    return (
        <Container className='about-page'>
            <Row>
                <Col className='mt' sm={6}>
                    <h1 className='orange'>About me</h1>

                    <motion.div className="about-page"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1}}
                    >
                        <p className='green'>I’m a full-stack web developer and UX/UI enthusiast, living in Dublin,
                            Ireland.</p>
                        <p className='green'>I’m passionate about building intuitive and accessible web interfaces,
                            while writing clean, maintainable code.</p>
                        <p className='green'>I have done work in front-end and back-end web development, automation
                            testing, built WordPress websites and Machine Learning projects.</p>
                    </motion.div>

                    <motion.div className="about-page"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay: delayFirst}}
                    >
                        <h1 className='orange'>Skills</h1>
                        <h2 className='white'>Front-End</h2>
                        <ul className="tech-list">
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

                        <ul className="tech-list">
                            {backSkills
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
                    </motion.div>

                    <motion.div className="about-page"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay: delaySecond}}
                    >
                        <p>Have a question or would like to work together?
                            <span> </span>
                            <NavLink exact="true" activeclassname="active" to="/"><span>Contact me</span>
                            </NavLink>.
                        </p>
                    </motion.div>
                </Col>
                <Col sm={6} className='img-container'>
                    <motion.div className="about-page"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay: delayFirst}}
                    >
                        <img src={HomeSVG}/>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default About
