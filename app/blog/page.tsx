import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import BlogComponent from '../components/BlogComponent'
import Footer from '../components/Footer'
import BlogList from '../components/BlogList'

const BlogPage = () => {
  return (
    <>
      <HeaderAppBar/>
      <Flex h={"60px"}></Flex>
      
      <BlogList/>
      
      <Footer/>
    </>
  )
}

export default BlogPage