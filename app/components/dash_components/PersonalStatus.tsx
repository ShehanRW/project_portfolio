'use client'
import { Button, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const PersonalStatus = () => {
  return (
    <>
        <Flex w={300} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'}>Basic Status</Text>
            <Input placeholder='Title' size={'sm'} color={'brand.200'} borderRadius={'none'}/>
            <Textarea placeholder='Description' size={'sm'} color={'brand.200'} borderRadius={'none'}/>
            <Button bg={'brand.200'} size={'sm'} borderRadius={'none'}>Update</Button>
        </Flex>
    </>
  )
}

export default PersonalStatus