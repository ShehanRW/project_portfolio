import React from 'react'
import HeaderAppBar from '../components/HeaderAppBar'
import { Box, Flex, Text, SimpleGrid} from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import ThreeScene from '../components/ThreeScene'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <HeaderAppBar/>

      <Flex h={"60px"}></Flex>
      
        <Flex flexDirection={'row'}>
          <Flex m={2} w={'full'} h={650} alignItems={'center'} justifyContent={'center'} px={10} flexDirection={'column'}>
              
              <Box py={10}>
                <Text color={'brand.0'} fontSize={40} fontWeight={'10'} textAlign={"center"}> Welcome. <br/> I'm Shehan Wijerathna </Text>
              </Box>

              <Box w={80}>
                <Text color={'brand.200'} fontSize={20} fontWeight={'700'} textAlign={"center"}> ksahd ahkj fiasf hiuadoif aihdf kaldj hfakljdfh adfkla jfadjkfuage faakdf jakdfj adfffeeeeeee </Text>
              </Box>

          </Flex>
          <Flex m={2} w={'full'} h={'auto'} alignItems={'center'} justifyContent={'center'} display={{base:'none', md:'block'}} bg={'white'}>
            
          </Flex>
          
        </Flex>

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