'use client'
import { Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

// interface Blog {
//     id: number;
//     blogTitle: string;
//     blogDescription: string;
//     blogLink: string;
// }

// interface BlogCardProps {
//     blog: Blog | undefined;
// }
interface Blog{
    id: number;
    title: string;
    description: string;
    link: string;
}

const BlogComponent: React.FC<Blog> = ({ id, title, description, link }) => {
    // if (!blog) {
    //     return null; // or you can return a loading spinner or a placeholder
    // }

    const direct = () => {
        window.open(link, '_blank');
    };

    return (
        <Flex border='2px solid #323232' _hover={{ border: '2px solid', borderColor: 'brand.200' }} onClick={direct} cursor={'pointer'}>
            <Card maxW='full' cursor={'pointer'} bg={"brand.1000"} borderRadius={0}>
                <CardBody >
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={"brand.100"}>{title}</Heading>
                        <Text color={"brand.0"}>
                            {description}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default BlogComponent;
