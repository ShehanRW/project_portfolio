'use client'
import { Button, Flex, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const HomeStatus = () => {

  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleUpdate = async () => {
    setLoading(true);
    if(heading!=="" && subHeading!==""){
      try {
        const response = await axios.put('http://localhost:8080/api/v1/updatestatus', {
          ID: 1,  
          heading: heading,
          subHeading: subHeading
        });
        console.log('Update successful:', response.data);
        toast({
          title: "Project added.",
          description: "The project has been successfully added.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

      } catch (error) {
        console.error('Error updating status:', error);
        toast({
          title: "Error.",
          description: "There was an error adding the project.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    }else{
      toast({
        title: "Error.",
        description: "Empty fields error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  return (
    <>
        <Flex w={300} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'}>Home Status</Text>
            <Input placeholder='Web heading' size={'sm'} color={'brand.200'} borderRadius={'none'} value={heading} onChange={(e) => setHeading(e.target.value)}/>
            <Input placeholder='Sub heading' size={'sm'} color={'brand.200'} borderRadius={'none'} value={subHeading} onChange={(e) => setSubHeading(e.target.value)}/>
            <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} onClick={handleUpdate} isLoading={loading}>Save</Button>
        </Flex>
    </>
  )
}

export default HomeStatus