import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react'

const ProfilePage = () => {
  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      <Flex direction={{base:'column', md:'row'}} justifyContent={'center'} >
        <Box mx={5}>
          <Image src='profile_pic.jpg' alt='profile_pic' w={500}/>
        </Box>

        <Flex direction={'column'} m={10} >
          <Text color={'brand.200'} fontSize={{base:40,md:50}} fontWeight={10}>Shehan Wijerathna</Text>
          <Text color={'brand.200'} fontSize={15} fontWeight={500} ml={5}>Software Developer Reading Bachelors </Text>
          <Text color={'brand.200'} fontSize={20} fontWeight={10} m={5} w={500}>I am interested in software developing, system architectures and coding. I am doing arts, 3D design and video production to youtube as a hobby also. </Text>

          <Flex m={5} direction={'column'} >
            <Text color={'brand.200'} fontSize={15} fontWeight={10}>Mobile: +94762782251</Text>
            <Link href='mailto:shehanranjukaw5@gmail.com' color={'brand.200'} fontSize={15} fontWeight={10}>Email</Link>
            <Link href='https://www.linkedin.com/in/shehan-wijerathne-66124120a/' target='blank' color={'brand.200'} fontSize={15} fontWeight={10}>LinkedIn</Link>
            <Link href='https://www.facebook.com/ShehanWijerathna99/' color={'brand.200'} fontSize={15} fontWeight={10}>Facebook</Link>
            <Link href='https://github.com/SheeRaaameetrance56' color={'brand.200'} fontSize={15} fontWeight={10}>GitHub</Link>
            <Link href='https://www.hackerrank.com/profile/shehanranjukaw5' color={'brand.200'} fontSize={15} fontWeight={10}>Hackerrank</Link>
          </Flex>
        </Flex>
      </Flex>
      
    </>
  )
}

export default ProfilePage