import HomeStatus from '@/app/components/dash_components/HomeStatus'
import InputBlog from '@/app/components/dash_components/InputBlog'
import InputProjects from '@/app/components/dash_components/InputProjects'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Dash = () => {
  return (
    <>
      <Flex>
        <HomeStatus/>
        
      </Flex>
      <Flex>
        <InputProjects/>
      </Flex>
      <Flex>
        <InputBlog/>
      </Flex>
    </>
  )
}

export default Dash