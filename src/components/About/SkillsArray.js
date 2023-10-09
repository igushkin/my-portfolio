import {useState, useEffect} from "react";

const parseSkills = (mdContent) => {
    const skills = [];
    const lines = mdContent.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("## ")) {
            const name = lines[++i].trim().split("name:")[1];
            const img = lines[++i].trim().split("img:")[1];

            skills.push({
                name,
                img
            });
        }
    }

    return skills;
};

const SkillsArray = (path) => {
    const [OtherProjects, setOtherProjects] = useState([]);

    useEffect(() => {
        fetch(path)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch markdown content");
                }
                return response.text();
            })
            .then((mdContent) => {
                setOtherProjects(parseSkills(mdContent));
            })
            .catch((error) => {
                console.error("Error fetching markdown content:", error);
            });
    }, []);

    return OtherProjects;
};

export default SkillsArray;