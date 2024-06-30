import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const HomeStatus = () => {
  return (
    <>
        <Flex w={300} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'}>Basic Status</Text>
            <Input placeholder='Web heading' size={'sm'} color={'brand.200'} borderRadius={'none'}/>
            <Input placeholder='Sub heading' size={'sm'} color={'brand.200'} borderRadius={'none'}/>
            <Button bg={'brand.200'} size={'sm'} borderRadius={'none'}>Save</Button>
        </Flex>
    </>
  )
}

export default HomeStatus