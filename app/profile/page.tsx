import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Box, Flex, Text, Image, Link, Input } from '@chakra-ui/react'
import Footer from '../components/Footer'

const ProfilePage = () => {
  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      <Flex direction={{base:'column', md:'row'}} >
        <Box mx={5} >
          <Image src='profile_pic.jpg' alt='profile_pic' w={{base:'auto', md:800}}/>
        </Box>

        <Flex direction={'column'} m={10}>
          <Text color={'brand.200'} fontSize={{base:40,md:50}} fontWeight={10}>Shehan Wijerathna</Text>
          <Text color={'brand.200'} fontSize={15} fontWeight={500} ml={5}>Software Developer Reading Bachelors </Text>
          <Text color={'brand.200'} fontSize={20} fontWeight={10} m={5}>I am a software developer, System designer and Deep learner, system architectures and coding. I am doing arts, 3D design and video production to youtube as a hobby also. </Text>
        </Flex>
      </Flex>

      <Footer/>
      
    </>
  )
}

export default ProfilePage