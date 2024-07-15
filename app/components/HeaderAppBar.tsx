'use client'
import { Box, Flex, Text, Link as ChakraLink, Menu, MenuButton, MenuList, MenuItem, Button, IconButton } from '@chakra-ui/react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react'


const HeaderAppBar = () => {

  const pathname = usePathname();

  const links = [
    { href: '/home', label: 'Home' },
    { href: '/profile', label: 'Profile' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <Flex h={'15ig'} w={'full'} bg={'brand.900'} position={'fixed'} gap={1} flex={1} zIndex={1}>

        <Flex  alignItems={'center'} cursor={'pointer'} _hover={{ color: 'brand.0' }}>
          <ChakraLink href='https://shehanrw.github.io/project_portfolio/' bg={'brand.50'} fontWeight={'700'} fontSize={30} p={2} style={{ textDecoration:'none' }}>
            SW
          </ChakraLink>
        </Flex>
        
        <Flex flex={6} h={5} w={5}>
          {/* spacer */}
        </Flex>

        <Flex flex={3} h={"15ig"} w={5} gap={2} mr={10} justifyContent={'center'} alignItems={'center'} display={{base:'none', md:'flex'}}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Text
                color={pathname === link.href ? 'brand.50' : 'brand.0'}
                fontWeight="500"
                fontSize={20}
                p={2}
                _hover={{ color: 'brand.50' }}
                _focus={{color: 'brand.50'}}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Flex>

        <Menu >
          <Flex alignItems={'center'} justifyContent={'center'} margin={2}>
            <MenuButton
              bg={'brand.100'}
              alignItems={'center'}
              justifyContent={'center'}
              as={IconButton}
              display={{base:'block', md:'none'}}
            > M </MenuButton>
          </Flex>
          
          <MenuList>
            <MenuItem >
              {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  color={pathname === link.href ? 'brand.50' : 'brand.900'}
                  fontWeight="500"
                  fontSize={20}
                  p={2}
                  _hover={{ color: 'brand.50' }}
                  _focus={{color: 'brand.50'}}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Text>
              </Link>))}
            </MenuItem>
          </MenuList>
        </Menu>

      </Flex>
    </>
  )
}

export default HeaderAppBar