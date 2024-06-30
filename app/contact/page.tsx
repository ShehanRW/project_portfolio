import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Flex, Text, Image, Box, Link, Input, Textarea, Button } from '@chakra-ui/react'
import Footer from '../components/Footer'

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
            <Link href='mailto:shehanranjukaw5@gmail.com' color={'brand.200'} fontSize={15} fontWeight={10}>Email</Link>
            <Link href='https://www.linkedin.com/in/shehan-wijerathne-66124120a/' target='blank' color={'brand.200'} fontSize={15} fontWeight={10}>LinkedIn</Link>
            <Link href='https://www.facebook.com/ShehanWijerathna99/' color={'brand.200'} fontSize={15} fontWeight={10}>Facebook</Link>
            <Link href='https://github.com/SheeRaaameetrance56' color={'brand.200'} fontSize={15} fontWeight={10}>GitHub</Link>
            <Link href='https://www.hackerrank.com/profile/shehanranjukaw5' color={'brand.200'} fontSize={15} fontWeight={10}>Hackerrank</Link>
          </Flex>
        </Flex>
        
      </Flex>

      <Flex direction={'column'} m={20} mx={{base:20, md:40}} justifyContent={'center'} gap={5}>
        <Input placeholder='E-mail' variant='flushed' color={'brand.100'} borderBottom={"solid 2px"} borderColor={'brand.200'}/>
        <Textarea placeholder='Description' color={'brand.100'} borderRadius={0} border={"solid 2px"} borderColor={'brand.200'}/>
        <Button mx={{base:0, md:200}} borderRadius={'none'} bg={'brand.200'}>Submit</Button>
        <Button mx={{base:0, md:200}} my={10} borderRadius={'none'} bg={'brand.200'}>Download Resume</Button>
      </Flex>

      <Footer/>
    </>
  )
}

export default ContactPage