import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from "@chakra-ui/react";
import ImageSlider from "../ImageSlider";
import SkillsArray from "../About/SkillsArray";
import React from 'react';
import {ModalHeader} from "react-bootstrap";

function MyModal({project, isOpen, onClose}) {

    const frontSkills = SkillsArray("/content/FrontEndSkills.md");
    const backSkills = SkillsArray("/content/BackEndSkills.md");
    const skills = frontSkills.concat(backSkills);
    const initialRef = React.useRef(null)

    const containerStyles = {
        marginBottom: '24px'
    };

    const images = project != null ? project.images : [];

    return (<>
        <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
            <ModalOverlay/>
            <ModalContent maxW="960px">
                <ModalHeader style={containerStyles} tabIndex={-1} ref={initialRef}>
                    <ImageSlider slides={images}/>
                </ModalHeader>
                <ModalBody>
                    <p className="subt txt-white">{project?.name}</p>
                    <p className="txt-green">{project?.description}</p>
                    <p className="subt txt-white">My Contributions</p>
                    <ul>
                        {project?.contribution.map((contr, index) => (
                            <li key={index} className="txt-green">{contr}</li>
                        ))}
                    </ul>
                    <p className="subt txt-white">Technologies and Tools</p>

                    <ul className="tech-list">
                        {skills
                            .filter((skill) => {
                                return project?.tools.includes(skill.name);
                            })
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


                </ModalBody>
                <ModalFooter>
                    <Button className="learnMore" colorScheme='blue' mr={3}
                            onClick={() => window.open(project.sourceCode, "_blank")}>
                        source code
                    </Button>
                    <Button className="learnMore" colorScheme='blue' mr={3} onClick={onClose}>
                        close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>)
}

export default MyModal;