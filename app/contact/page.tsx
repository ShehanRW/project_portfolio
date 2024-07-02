import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Flex, Text, Image, Box, Link, Input, Textarea, Button } from '@chakra-ui/react'
import Footer from '../components/Footer'
import InputContactMessages from '../components/InputContactMessages'

const ContactPage = () => {

  

  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      <Flex direction={{base:'column', md:'row'}} justifyContent={'center'} textAlign={'center'}>
        <Flex direction={'column'} m={10}>
          <Text color={'brand.200'} fontSize={{base:40,md:50}} fontWeight={10}>Shehan Wijerathna</Text>

          <Flex direction={{base:'column', md:'row'}} gap={5} mx={10}>
            <Text color={'brand.200'} fontSize={15} fontWeight={10}>Mobile: +94762782251</Text>
            <Link href='mailto:shehanranjukaw5@gmail.com' color={'brand.200'} fontSize={15} fontWeight={10} isExternal>Email</Link>
            <Link href='https://www.linkedin.com/in/shehan-wijerathne-66124120a/' target='blank' color={'brand.200'} fontSize={15} fontWeight={10} isExternal>LinkedIn</Link>
            <Link href='https://www.facebook.com/ShehanWijerathna99/' color={'brand.200'} fontSize={15} fontWeight={10} isExternal>Facebook</Link>
            <Link href='https://github.com/ShehanRW' color={'brand.200'} fontSize={15} fontWeight={10} isExternal>GitHub</Link>
            <Link href='https://www.hackerrank.com/profile/shehanranjukaw5' color={'brand.200'} fontSize={15} fontWeight={10} isExternal>Hackerrank</Link>
            <Link href='https://stackoverflow.com/users/14530602/shehan-wijerathne' color={'brand.200'} fontSize={15} fontWeight={10} isExternal>Stackoverflow</Link>

          </Flex>
        </Flex>
        
      </Flex>

      <InputContactMessages/>

      <Footer/>
    </>
  )
}

export default ContactPage