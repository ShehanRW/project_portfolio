import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Flex, Text } from '@chakra-ui/react'

const BlogPage = () => {
  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      <Flex>
        <Text color={'brand.0'}>Blog page</Text>
      </Flex>
      
    </>
  )
}

export default BlogPage