import {Button, ButtonGroup, Card, CardBody, Center, Flex, SimpleGrid, useDisclosure,} from "@chakra-ui/react";
import {useState} from "react";
import ProjectsArray from "./ProjectsArray";
import TagsArray from "./TagsArray";
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import {CardFooter, CardHeader} from "react-bootstrap";
import MyModal from "../modal";


export default function Projects({color}) {
    const projects = ProjectsArray();
    const options = TagsArray("ProjectsTags");

    const [selected, setSelected] = useState("All");
    const {onOpen, isOpen, onClose} = useDisclosure();
    const [project, setProject] = useState(null);

    const handleSelected = (value) => {
        setSelected(value);
    };

    return (
        <motion.div className="projects-page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1}}
        >
            <Container className='projects'>
                <h1 className='orange text-center'>My projects</h1>

                <Center px={4}>
                    <ButtonGroup variant="outline" display={'flex'}
                                 style={{justifyContent: "space-between"}}
                                 className="btn-group"
                    >
                        <Button
                            className={selected === "All" ? "selected btn-outline-primary" : "btn-outline-primary"}
                            onClick={() => handleSelected("All")}
                        >
                            All
                        </Button>
                        {options.map((option, index) => (
                            <Button
                                key={index}
                                className={selected === option.value ? "selected btn-outline-primary" : "btn-outline-primary"}
                                onClick={() => handleSelected(option.value)}
                            >
                                {option.value}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Center>

                <SimpleGrid columns={[1, 2, 3]} px={4} spacingX='70px' spacingY='25px'>
                    {projects
                        .filter((project) => {
                            if (selected === "All") {
                                return true;
                            } else {
                                return project.tags.includes(selected);
                            }
                        })
                        .map((project) => (
                            <Card maxW='md' overflow={"hidden"} key={project.name}
                                  style={{
                                      backgroundColor: '#20382f'
                                  }}
                            >
                                <div className="clickable" onClick={() => {
                                    setProject(project);
                                    onOpen();
                                }}>
                                    <CardHeader
                                        style={{
                                            backgroundImage: `url(${project.thumbnail})`,
                                            paddingTop: '56.25%',
                                            backgroundSize: 'cover'
                                        }}>
                                    </CardHeader>
                                    <CardBody>
                                        <h2 className="white">
                                            {project.name}
                                        </h2>
                                        <p className="tags">
                                            {project.tags.join(" / ")}
                                        </p>
                                    </CardBody>
                                </div>
                                <CardFooter>
                                    <Flex justifyContent={"space-between"}>
                                        <Button className="learnMore"
                                                onClick={() => window.open(project.sourceCode, "_blank")}>
                                            source code
                                        </Button>
                                        <span style={{display: "none"}}>Jun-Jul 2022</span>
                                    </Flex>
                                </CardFooter>
                            </Card>

                        ))}
                </SimpleGrid>

                <MyModal isOpen={isOpen} onClose={onClose} project={project}></MyModal>

            </Container>
        </motion.div>
    )
}