'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

// interface Project {
//     id: number;
//     projectTitle: string;
//     projectDescription: string;
//     projectLink: string;
// }

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
  }

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         try {
    //             const response = await axios.get<Project[]>('http://localhost:8080/api/v1/getprojects');
    //             setProjects(response.data);
    //         } catch (error) {
    //             console.error('Error fetching projects:', error);
    //         }
    //     };

    //     fetchProjects();
    // }, []);

    useEffect(() => {
        // Fetch data from local JSON file
        fetch('./projectData.json')
          .then(response => response.json())
          .then(data => setProjects(data));
      }, []);

    return (
        <SimpleGrid columns={{base:1, md:3, sm:2}} spacing={5} mx={{base:0, md:55}}  gap={2} >
            {/* {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))} */}
            {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
        </SimpleGrid>
    );
};

export default ProjectList;
