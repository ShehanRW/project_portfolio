'use client'
import { Button, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MessageBlock from './MessageBlock'
import axios from 'axios'

interface Message {
  id: number;
  email: string;
  description: string;
}

const ContactMassages: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get<Message[]>('http://localhost:8080/api/v1/getmessages');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchMessages();
    }, []);

  return (
    <>
        <Flex flexShrink={0} w={600} h={200} overflow={'scroll'} direction={'column'} m={10} border={'solid 2px'} borderColor={'brand.200'} padding={2} gap={1}>
            <Text color={'brand.200'} >Contact Messages</Text>
            {messages.map((message) => (
                <MessageBlock key={message.id} message={message} />
            ))}
        </Flex>
    </>
  )
}

export default ContactMassages