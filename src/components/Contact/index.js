import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import {motion} from 'framer-motion'

const Contact = () => {

  const nameArray = 'udip'.split('')
  const jobArray = 'Blockchain Developer'.split('')
  const interestArray = 'Ethical Hacker'.split('')

  return (
      <motion.div className="container home-page"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{ duration: 1 }}
      >
        <div className="text-zone">
          <h1>
            Contact
          </h1>
        </div>
      </motion.div>
  )
}

export default Contact
