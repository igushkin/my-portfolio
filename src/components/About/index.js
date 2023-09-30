import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HomeSVG from '../../assets/images/home.svg'

const About = () => {

  const nameArray = 'udip'.split('')
  const jobArray = 'Blockchain Developer'.split('')
  const interestArray = 'Ethical Hacker'.split('')

  return (
      <motion.div className="container about-page"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{ duration: 1 }}
      >
      <Container className='home'>
        <Row>
          <Col className='mt' sm={6}>
          <h1 className='orange'>About me</h1>
          <p className='green' style={{maxWidth:425}}>I’m a full-stack web developer and UX/UI enthusiast, living in Dublin, Ireland.</p>
          <p className='green' style={{maxWidth:425}}>I’m passionate about building intuitive and accessible web interfaces, while writing clean, maintainable code.</p>
          <p className='green' style={{maxWidth:425}}>I have done work in front-end and back-end web development, automation testing, built WordPress websites and Machine Learning projects.</p>
          <h1 className='orange'>Skills</h1>
          <h2 className='white'>Front-End</h2>
          <h2 className='white'>Back-End</h2>
          <Button variant="outline-primary">view my work</Button>{' '}
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
