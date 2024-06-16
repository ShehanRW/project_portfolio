'use client'
import { Box, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'


const HeaderAppBar = () => {
  return (
    <>
      <Flex h={'15ig'} w={'full'} bg={'brand.900'} position={'fixed'} gap={4}>
        <Flex bg={'brand.50'} alignItems={'center'} cursor={'pointer'}>
          <Link href='/' fontWeight={'700'} fontSize={30} my={2} mx={2} style={{ textDecoration:'none' }}>
            SW
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default HeaderAppBar