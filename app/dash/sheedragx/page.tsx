import ContactMassages from '@/app/components/dash_components/ContactMassages'
import HomeStatus from '@/app/components/dash_components/HomeStatus'
import InputBlog from '@/app/components/dash_components/InputBlog'
import InputProjects from '@/app/components/dash_components/InputProjects'
import PersonalStatus from '@/app/components/dash_components/PersonalStatus'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Dash = () => {
  return (
    <>
      <Flex>
        <HomeStatus/>
        <PersonalStatus/>
        <ContactMassages/>
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