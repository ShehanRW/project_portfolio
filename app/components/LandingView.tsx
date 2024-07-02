'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LandingView = () => {

    const[status, setStatus] = useState({heading:'', subHeading:''});

    useEffect(() => {
        const fetchStatus = async () => {
          try {
            const response = await axios.get('http://localhost:8080/api/v1/getstatus');
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
        <Flex flexDirection={'row'}>
          <Flex m={2} w={'full'} h={650} alignItems={'center'} justifyContent={'center'} px={10} flexDirection={'column'}>
              
              <Box py={10}>
                <Text color={'brand.0'} fontSize={40} fontWeight={'10'} textAlign={"center"}>{status.heading}</Text>
              </Box>

              <Box w={80}>
                <Text color={'brand.200'} fontSize={20} fontWeight={'700'} textAlign={"center"}>{status.subHeading}</Text>
              </Box>

          </Flex>
          <Flex m={2} w={'full'} h={'auto'} alignItems={'center'} justifyContent={'center'} display={{base:'none', md:'block'}} bg={'white'}>
            
          </Flex>
          
        </Flex>
    </>
  )
}

export default LandingView