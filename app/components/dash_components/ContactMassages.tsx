'use client'
import { Button, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MessageBlock from './MessageBlock'

const ContactMassages = () => {
  return (
    <>
        <Flex flexShrink={0} w={600} h={200} overflow={'scroll'} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'} >Contact Messages</Text>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
        </Flex>
    </>
  )
}

export default ContactMassages