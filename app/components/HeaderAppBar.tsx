'use client'
import { Box, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'


const HeaderAppBar = () => {
  return (
    <>
      <Flex h={'15ig'} w={'full'} bg={'brand.900'} position={'fixed'} gap={1} flex={1} >

        <Flex  alignItems={'center'} cursor={'pointer'} _hover={{ color: 'brand.0' }}>
          <Link href='/' bg={'brand.50'} fontWeight={'700'} fontSize={30} p={2} style={{ textDecoration:'none' }}>
            SW
          </Link>
        </Flex>
        
        <Flex flex={6} h={5} w={5}>
          {/* spacer */}
        </Flex>

        <Flex flex={3} h={"15ig"} w={5} gap={2} justifyContent={'center'} alignItems={'center'}>
          <Link href='/' color={"brand.0"} fontWeight={'500'} fontSize={20} p={2} _hover={{ color: 'brand.50' }} style={{ textDecoration:'none' }}>Home</Link>
          <Link href='/' color={"brand.0"} fontWeight={'500'} fontSize={20} p={2} _hover={{ color: 'brand.50' }} style={{ textDecoration:'none' }}>Profile</Link>
          <Link href='/' color={"brand.0"} fontWeight={'500'} fontSize={20} p={2} _hover={{ color: 'brand.50' }} style={{ textDecoration:'none' }}>Blog</Link>
          <Link href='/' color={"brand.0"} fontWeight={'500'} fontSize={20} p={2} _hover={{ color: 'brand.50' }} style={{ textDecoration:'none' }}>Contact</Link>
        </Flex>

      </Flex>
    </>
  )
}

export default HeaderAppBar