import './index.scss'
import Cooding from '../../assets/images/coding.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faHome, faList, faScrewdriverWrench, faUser,} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="nav-bar">
                <Link className="logo" to="/">
                    <img src={Cooding} alt="Logo"/>
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                    </NavLink>

                    <NavLink activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="skills-link"
                        to="/my-projects"
                    >
                        <FontAwesomeIcon icon={faList} color="#4d4d4e"/>
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="contact-link"
                        to="/contact"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/mark-igushkin/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/igushkin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#b9b9b9"/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
