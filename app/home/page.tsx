import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Box, Flex, Text, SimpleGrid} from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import ThreeScene from '../components/ThreeScene'
import Footer from '../components/Footer'
import LandingView from '../components/LandingView'

const HomePage = () => {
  return (
    <>
      <HeaderAppBar/>

      <Flex h={"60px"}></Flex>
      
        <LandingView/>

        <Flex py={10} px={{base:10, md:0}} direction={'column'}>
          <Text fontSize={25} my={5} ml={{base:0, md:20}} color={'brand.0'}>Projects</Text>
          <SimpleGrid columns={{base:1, md:3, sm:2}} spacing={5} mx={{base:0, md:55}}  gap={2} >
            <ProjectCard/>
          </SimpleGrid>
        </Flex>

        <Footer/>

    </>
  )
}

export default HomePage