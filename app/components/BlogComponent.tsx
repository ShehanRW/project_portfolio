'use client'
import { Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const BlogComponent = () => {
    const direct = ()=>{
        window.location.href = '#';
    };

    return (
        <>
          <Flex border='2px solid #323232' _hover={{ border: '2px solid', borderColor: 'brand.200' }} onClick={direct}>
              <Card maxW='full' cursor={'pointer'} bg={"brand.1000"} borderRadius={0}>
                  <CardBody >
                      {/* <Image
                          src='intro screen.jpg'
                          alt='Site Jotter'
                          h={300}
                          w={'full'}
                      /> */}
                      <Stack mt='6' spacing='3'>
                          <Heading size='md' color={"brand.100"}>CPU Architectures</Heading>
                          <Text color={"brand.0"}>
                              This sofa is perfect for modern tropical spaces, baroque inspired
                              spaces, earthy toned spaces and for people who love a chic design with a
                              sprinkle of vintage design.
                          </Text>
                      </Stack>
                  </CardBody>
              </Card>
          </Flex>
        </>
    )
}

export default BlogComponent