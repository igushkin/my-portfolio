import {
    Divider,
    Stack,
    Text,
    Box,
    HStack,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Image,
    Heading,
    SimpleGrid,
    Badge,
    Link,
    Center, IconButton, Avatar, Flex, useDisclosure,
} from "@chakra-ui/react";
import {useState} from "react";
import ProjectsArray from "./ProjectsArray";
import TagsArray from "./TagsArray";
import {motion} from 'framer-motion'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeSVG from '../../assets/images/home.svg';
import Container from 'react-bootstrap/Container';
import {CardFooter, CardHeader} from "react-bootstrap";
import MyModal from "../modal";

export default function Projects({color}) {
    const others = ProjectsArray();
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
                    {others
                        .filter((other) => {
                            if (selected === "All") {
                                return true;
                            } else {
                                return other.tags.includes(selected);
                            }
                        })
                        .map((other) => (
                            <Card maxW='md' overflow={"hidden"} key={other.name}
                                  style={{
                                      backgroundColor: '#20382f'
                                  }}
                            >
                                <div className="clickable" onClick={() => {
                                    setProject(other);
                                    onOpen();
                                }}>
                                    <CardHeader
                                        style={{
                                            backgroundImage: 'url("https://www.martas.me/img/work/cards/synneuro.jpg")',
                                            paddingTop: '56.25%',
                                            backgroundSize: 'cover'
                                        }}>
                                    </CardHeader>
                                    <CardBody>
                                        <h2 className="white">
                                            {other.name}
                                        </h2>
                                        <p className="tags">
                                            UX/UI / React.js / Python
                                        </p>
                                    </CardBody>
                                </div>
                                <CardFooter>
                                    <Flex justifyContent={"space-between"}>
                                        <Button className="learnMore">learn more</Button>
                                        <span>Jun-Jul 2022</span>
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