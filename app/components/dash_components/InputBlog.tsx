'use client'
import { Button, Flex, Input, Textarea, Text, Image, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const InputBlog = () => {

  const [blogTitle, setBlogTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogLink, setBlogLink] = useState('');

  const toast = useToast();

  const handleAddBlog = async () => {
    if(blogTitle!==""&&blogDescription!==""&&blogLink!==""){
      try {
        const response = await axios.post('http://localhost:8080/api/v1/addblog', {
          blogTitle,
          blogDescription,
          blogLink
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
            <Text color={'brand.200'}>Add a blog</Text>
            <Input placeholder='Blog Title' size={'sm'} color={'brand.200'} borderRadius={'none'} value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)}/>
            <Textarea placeholder='Content' size={'sm'} color={'brand.200'} borderRadius={'none'}value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)}/>
            <Input placeholder='Blog Link' size={'sm'} color={'brand.200'} borderRadius={'none'} value={blogLink} onChange={(e) => setBlogLink(e.target.value)}/>

            <Flex gap={1}>    
                <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200} onClick={handleAddBlog}>Save</Button>
            </Flex>
        </Flex>
    </>
  )
}

export default InputBlog