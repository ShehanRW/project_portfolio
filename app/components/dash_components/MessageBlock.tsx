'use client'
import { Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface Message {
    id: number;
    email: string;
    description: string;
}

interface MessageCardProps {
    message: Message | undefined;
}

const MessageBlock: React.FC<MessageCardProps> = ({message}) => {
    if (!message) {
        return null; // or you can return a loading spinner or a placeholder
    }

  return (
    <>
        <Flex gap={1}>
                <Card color={'brand.200'} bg={'transparent'}>
                    <CardBody>
                        <Text>{message.email}</Text>
                    </CardBody>
                </Card>
                <Card color={'brand.200'} bg={'transparent'}>
                    <CardBody>
                        <Text>{message.description}</Text>
                    </CardBody>
                </Card>
            </Flex>
    </>
  )
}

export default MessageBlock