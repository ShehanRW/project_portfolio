'use client'
import { Button, Flex, Input, Textarea, Text } from '@chakra-ui/react'
import React from 'react'

const InputBlog = () => {
  return (
    <>
        <Flex w={900} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'}>Add a blog</Text>
            <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Add image</Button>
            <Input placeholder='Blog Title' size={'sm'} color={'brand.200'} borderRadius={'none'}/>
            <Textarea placeholder='Content' size={'sm'} color={'brand.200'} borderRadius={'none'}/>
            <Flex gap={1}>
                <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Save</Button>
                <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Edit</Button>
                <Button bg={'brand.200'} size={'sm'} borderRadius={'none'} w={200}>Delete</Button>
            </Flex>
        </Flex>
    </>
  )
}

export default InputBlog