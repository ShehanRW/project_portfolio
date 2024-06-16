import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Box, Flex, Text, Link, Container} from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
      <HeaderAppBar/>

      <Flex h={"60px"}></Flex>

      <Flex flexDirection={'row'}>
        <Flex m={2} w={'full'} h={620} alignItems={'center'} justifyContent={'center'} >
          <Text color={'brand.0'} fontSize={20} fontWeight={'400'}>sdfas a</Text>
        </Flex>
        <Flex m={2} w={'full'} h={620} alignItems={'center'} justifyContent={'center'} >
          
        </Flex>
      </Flex>
      
    </>
  )
}

export default HomePage