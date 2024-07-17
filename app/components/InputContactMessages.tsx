'use client'

import { Button, Flex, Input, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const InputContactMessages = () => {

    const [email,setEmail] = useState('');
    const [description, setDescription] = useState('');

    const toast = useToast();

    const handleAddMessage = async () => {
        if(email!==""&& description!==""){
        try {
            // const response = await axios.post('http://localhost:8080/api/v1/addmessage', {
            //     email,
            //     description
            // });

            const templateParams = {
                from_email: email,
                description: description,
              };
          
              emailjs
                .send(
                  'service_5jzdxb8',
                  'template_o52kfzy',
                  templateParams,
                  '17-LB8BGaWlTXGznS'
                );

            setEmail("");
            setDescription("");
            // console.log('Message added:', response.data);
            toast({
            title: "Message added.",
            description: "I will contact you in shortly.",
            status: "success",
            duration: 5000,
            isClosable: true,
            });
    
        } catch (error) {
            console.error('Error adding:', error);
            toast({
            title: "Error.",
            description: "There was an error adding the Message.",
            status: "error",
            duration: 5000,
            isClosable: true,
            });
        }
        }else{
        toast({
            title: "Error.",
            description: "Please don't let fields empty",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        }
    };

  return (
    <>
        <Flex direction={'column'} m={20} mx={{base:20, md:40}} justifyContent={'center'} gap={5}>
            <Input placeholder='E-mail' variant='flushed' color={'brand.100'} borderBottom={"solid 2px"} borderColor={'brand.200'}  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Textarea placeholder='Description' color={'brand.100'} borderRadius={0} border={"solid 2px"} borderColor={'brand.200'} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <Button mx={{base:0, md:200}} borderRadius={'none'} bg={'brand.200'} onClick={handleAddMessage}>Submit</Button>
            <Button mx={{base:0, md:200}} my={10} borderRadius={'none'} bg={'brand.200'}>Download Resume</Button>
        </Flex>
    </>
  )
}

export default InputContactMessages