'use client'
import { Button, Flex, Input, Text, Textarea, Image, SimpleGrid, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProjectList from '../ProjectList'
import axios from 'axios'

const InputProjects = () => {

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');

  const toast = useToast();

  const handleAddProject = async () => {
    if(projectTitle!==""&&projectDescription!==""&&projectLink!==""){
      try {
        const response = await axios.post('http://localhost:8080/api/v1/addproject', {
          projectTitle,
          projectDescription,
          projectLink
        });
        console.log('Project added:', response.data);
        toast({
          title: "Project added.",
          description: "The project has been successfully added.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
  
      } catch (error) {
        console.error('Error adding project:', error);
        toast({
          title: "Error.",
          description: "There was an error adding the project.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }else{
      toast({
        title: "Error.",
        description: "Cannot add empty project",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
        <Flex w={900} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'}>Add a project</Text>
            <Input placeholder='Project Title' size={'sm'} color={'brand.200'} borderRadius={'none'} value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}/>
            <Textarea placeholder='Description' size={'sm'} color={'brand.200'} borderRadius={'none'} value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>
            <Textarea placeholder='Link' size={'sm'} color={'brand.200'} borderRadius={'none'} value={projectLink} onChange={(e) => setProjectLink(e.target.value)}/>

            <Flex gap={1}>
              <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Select Project</Button>
              <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200} onClick={handleAddProject}>Save</Button>
              <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Edit</Button>
              <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Delete</Button>
            </Flex>
        </Flex>
    </>
  )
}

export default InputProjects
