import {useState, useEffect} from "react";

const parseOtherProjects = (mdContent) => {
    const projects = [];
    const lines = mdContent.split("\r\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const projMap = new Map();

        if (line.startsWith("## ")) {
            for (let y = i + 1; y < lines.length; y++) {
                let line = lines[y].trim();

                if (!line) {
                    break;
                }

                let key = line.split("::")[0];
                let value = line.split("::")[1];
                projMap.set(key, value);
            }

            projects.push({
                name: projMap.get("name"),
                description: projMap.get("description"),
                date: projMap.get("date"),
                contribution: projMap.get("contribution").split("|"),
                tags: projMap.get("tags").split(","),
                thumbnail: projMap.get("thumbnail"),
                images: projMap.get("images").split(","),
                tools: projMap.get("tools").split(","),
                sourceCode: projMap.get("sourceCode")
            });
        }
    }
    return projects;
};

const ProjectsArray = () => {
    const [OtherProjects, setOtherProjects] = useState([]);

    useEffect(() => {
        fetch("/content/Projects.md")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch markdown content");
                }
                return response.text();
            })
            .then((mdContent) => {
                setOtherProjects(parseOtherProjects(mdContent));
            })
            .catch((error) => {
                console.error("Error fetching markdown content:", error);
            });
    }, []);

    return OtherProjects;
};

export default ProjectsArray;