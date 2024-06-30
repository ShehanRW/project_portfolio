'use client'
import { Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const MessageBlock = () => {
  return (
    <>
        <Flex gap={1}>
                <Card color={'brand.200'} bg={'transparent'}>
                    <CardBody>
                        <Text>blahblahblah@blah.com</Text>
                    </CardBody>
                </Card>
                <Card color={'brand.200'} bg={'transparent'}>
                    <CardBody>
                        <Text>blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</Text>
                    </CardBody>
                </Card>
            </Flex>
    </>
  )
}

export default MessageBlock