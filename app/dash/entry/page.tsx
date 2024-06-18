'use client'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Entry = () => {
    
    const direct = ()=>{
        window.location.href = '/dash/shDash';
    };
  return (
    <>
        <Flex w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}>
            <Box>
                <Text color={'brand.0'} m={2} mt={50}>Name</Text>
                <Input/>
                <Text color={'brand.0'} m={2}>Password</Text>
                <Input/>
                <Button m={2} onClick={direct}>Enter</Button>
            </Box>
        </Flex>
    </>
  )
}

export default Entry
