import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import BlogComponent from '../components/BlogComponent'
import Footer from '../components/Footer'

const BlogPage = () => {
  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      <SimpleGrid columns={{base:1, md:3, sm:2}} spacing={5} mx={{base:0, md:55}}  gap={2} m={10}>
          <BlogComponent/>
          <BlogComponent/>
          <BlogComponent/>
          <BlogComponent/>
          <BlogComponent/>
          <BlogComponent/>
          <BlogComponent/>
          <BlogComponent/>
      </SimpleGrid>
      <Footer/>
    </>
  )
}

export default BlogPage