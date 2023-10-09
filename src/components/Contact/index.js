import './index.scss'
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from "../Form";
import Lottie from "lottie-web";
import groovyWalkAnimation from "../../assets/data.json";
import {useEffect, useRef} from "react";

const Contact = () => {

    const container = useRef(null);
    const initialized = useRef(false);

    let typeSpeed = 80;
    let letters = 18;
    let delayFirst = 0.7;
    let delaySecond = delayFirst + 0.7;

    useEffect(() => {
        if (initialized.current) {
            return;
        }
        initialized.current = true;
        Lottie.loadAnimation({
            animationData: groovyWalkAnimation,
            autoplay: true,
            container: container.current,
            loop: true,
            renderer: "svg",
        });
        console.log("ADASD")
    }, [])


    return (
        <Container className='contact-page about-page'>
            <Row>
                <Col className='mt mycol' sm={4}>
                    <h1 className='orange'>Contact me</h1>
                    <p className="green">
                        Got an idea I can help you with?<br/>
                        I'll be happy to hear from you!<br/>
                        Also, feel free to add me on <span> </span>
                        <a
                            href="https://www.linkedin.com/in/mark-igushkin/"
                            target="_blank"
                            rel="noreferrer"
                        >LinkedIn</a>.
                    </p>
                    <motion.div className="about-page"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay: delayFirst}}
                    >
                        <ContactForm></ContactForm>
                    </motion.div>
                </Col>
                <Col sm={8} className='mycol img-container'>
                    <motion.div className="about-page"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay: delayFirst}}
                    >
                        <div ref={container}></div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
