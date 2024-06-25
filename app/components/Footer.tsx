import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <Flex bg={"#323232"} w={'full'} h={200} alignItems={'center'} justifyContent={'center'} direction={'column'}>
        <Text color={"#8F8F7F"}>	&#169;Design and developed by Shehan Wijerathna</Text>
        <Flex gap={4} mt={5}>
            <Link href='https://www.linkedin.com/in/shehan-wijerathne-66124120a/' target='blank' color={'brand.200'} fontSize={15} fontWeight={10}><AiFillLinkedin/></Link>
            <Link href='https://www.facebook.com/ShehanWijerathna99/' color={'brand.200'} fontSize={15} fontWeight={10}><MdFacebook/></Link>
            <Link href='https://www.instagram.com/shehanwijerathna99/' color={'brand.200'} fontSize={15} fontWeight={10}><AiFillInstagram/></Link>
        </Flex>
    </Flex>
  )
}

export default Footer