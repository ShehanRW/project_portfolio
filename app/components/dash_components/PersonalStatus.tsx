'use client'
import { Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PersonalStatus = () => {

  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.put('http://localhost:8080/api/v1/updatestatus', {
        ID: 1,  
        title: title,
        bio: bio
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
          <Input placeholder='Title' size={'sm'} color={'brand.200'} borderRadius={'none'} value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea placeholder='Description' size={'sm'} color={'brand.200'} borderRadius={'none'} value={bio} onChange={(e) => setBio(e.target.value)}/>
          <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} onClick={handleUpdate} isLoading={loading}>Update</Button>
      </Flex>
    </>
  )
}

export default PersonalStatus