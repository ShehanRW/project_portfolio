'use client'
import React, { useEffect, useState } from 'react';
import HeaderAppBar from '../components/HeaderAppBar';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Footer from '../components/Footer';
import axios from 'axios';

const ProfilePage = () => {
  const [status, setStatus] = useState({ title: '', bio: '' });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/getStatus');
        if (response.data.length > 0) {
          setStatus(response.data[0]); 
        }
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
  }, []); 

  return (
    <>
      <HeaderAppBar />
      <Flex h={"60px"}></Flex>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box mx={5}>
          <Image src='profile_pic.jpg' alt='profile_pic' w={{ base: 'auto', md: 800 }} />
        </Box>

        <Flex direction={'column'} m={10}>
          <Text color={'brand.200'} fontSize={{ base: 40, md: 50 }} fontWeight={10}>Shehan Wijerathna</Text>
          <Text color={'brand.200'} fontSize={15} fontWeight={500} ml={5}>{status.title}</Text>
          <Text color={'brand.200'} fontSize={20} fontWeight={10} m={5}>{status.bio}</Text>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default ProfilePage;
