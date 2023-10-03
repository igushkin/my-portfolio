import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HomeSVG from '../../assets/images/home.svg'

const Contact = () => {

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
        <h1 className='orange'>Contact</h1>
        </Col>
        <Col sm={6} className='img-container'>
        <img src={HomeSVG}/>
        </Col>
      </Row>
    </Container>
    </motion.div>
  )
}

export default Contact
