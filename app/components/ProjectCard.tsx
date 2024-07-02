'use client'
import { Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Project {
    id: number;
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const direct = () => {
        window.open(project.projectLink, '_blank');
    };
    
    return (
        <>
          <Flex border='2px solid #323232' _hover={{ border: '2px solid', borderColor: 'brand.200' }} onClick={direct} cursor={'pointer'}>
              <Card maxW='full'  bg={"brand.1000"} borderRadius={0}>
                  <CardBody >
                      <Stack mt='6' spacing='3'>
                          <Heading size='md' color={"brand.100"}>{project.projectTitle}</Heading>
                          <Text color={"brand.0"}>
                            {project.projectDescription}
                          </Text>
                      </Stack>
                  </CardBody>
              </Card>
          </Flex>
        </>
    )
}

export default ProjectCard