'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import BlogComponent from './BlogComponent';


interface Blog {
    id: number;
    title: string;
    description: string;
    link: string;
}

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // useEffect(() => {
    //     const fetchBlogs = async () => {
    //         try {
    //             const response = await axios.get<Blog[]>('http://localhost:8080/api/v1/getblogs');
    //             setBlogs(response.data);
    //         } catch (error) {
    //             console.error('Error fetching blogs:', error);
    //         }
    //     };

    //     fetchBlogs();
    // }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('./blogData.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
      }, []);

    return (
        <SimpleGrid columns={{base:1, md:3, sm:2}} spacing={5} mx={{base:0, md:55}} gap={2} m={5}>
            {blogs.map((blog) => (
                <BlogComponent 
                    key={blog.id} 
                    id={blog.id}
                    title={blog.title}
                    description={blog.description}
                    link={blog.link} />
            ))}
        </SimpleGrid>
    );
};

export default BlogList;
