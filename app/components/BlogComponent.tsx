'use client'
import { Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Blog {
    id: number;
    blogTitle: string;
    blogDescription: string;
    blogLink: string;
}

interface BlogCardProps {
    blog: Blog | undefined;
}

const BlogComponent: React.FC<BlogCardProps> = ({ blog }) => {
    if (!blog) {
        return null; // or you can return a loading spinner or a placeholder
    }

    const direct = () => {
        window.open(blog.blogLink, '_blank');
    };

    return (
        <Flex border='2px solid #323232' _hover={{ border: '2px solid', borderColor: 'brand.200' }} onClick={direct} cursor={'pointer'}>
            <Card maxW='full' cursor={'pointer'} bg={"brand.1000"} borderRadius={0}>
                <CardBody >
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={"brand.100"}>{blog.blogTitle}</Heading>
                        <Text color={"brand.0"}>
                            {blog.blogDescription}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default BlogComponent;
