'use client'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const HomeStatus = () => {

  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.put('http://localhost:8080/api/v1/updatestatus', {
        ID: 1,  
        heading: heading,
        subHeading: subHeading
      });
      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <Flex w={300} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'}>Basic Status</Text>
            <Input placeholder='Web heading' size={'sm'} color={'brand.200'} borderRadius={'none'} value={heading} onChange={(e) => setHeading(e.target.value)}/>
            <Input placeholder='Sub heading' size={'sm'} color={'brand.200'} borderRadius={'none'} value={subHeading} onChange={(e) => setSubHeading(e.target.value)}/>
            <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} onClick={handleUpdate} isLoading={loading}>Save</Button>
        </Flex>
    </>
  )
}

export default HomeStatus