import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Box, Flex, Text, Link, Container} from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      <Flex>
        <Text color={'brand.0'}>Home page</Text>
      </Flex>
      
    </>
  )
}

export default HomePage