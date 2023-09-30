import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HomeSVG from '../../assets/images/home.svg'
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {

  return (
  <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{ duration: 1 }}
      >
    <Container className='home'>
      <Row>
        <Col className='mt' sm={6}>
        <h1 className='white'>Hi, I'm Mark</h1>
        <h1 className='orange'>
        <Typewriter
            words={['Back-End Developer', 'Java Developer', 'C# Developer']}
            loop={5}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className='green' style={{maxWidth:425}}>I love building responsive and functional websites and web applications.</p>
        <p className='green' style={{maxWidth:425}}>Got an idea I can help you with? Contact me.</p>
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

export default Home
