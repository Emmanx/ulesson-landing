import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  Image,
  Button,
  BoxProps,
  useMediaQuery,
  Link,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const MotionBox = motion<BoxProps>(Box)

export const Header = () => {
  const [showHeader, setShowHeader] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)
  const [isLargerThan768px] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos
      setShowHeader(!isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastYPos])

  return (
    <MotionBox
      animate={{ y: showHeader ? -150 : 0 }}
      initial={{ y: 0 }}
      transition={{ duration: '0.5' }}
      pos="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="10"
    >
      <Box bg="brand.orange" py="1rem">
        <Container maxW="114rem">
          <Flex justify="space-between" align="center" color="#fff" w="full">
            <Heading
              fontSize={{ base: '1.2rem', lg: '2rem' }}
              fontWeight="bold"
              maxW={{ base: '16rem', lg: '100%' }}
            >
              Call to speak with a Counsellor / Subscribe
            </Heading>
            <HStack
              align={{ base: 'flex-start', lg: 'center' }}
              spacing={{ base: '0', lg: '1rem' }}
              flexDir={{ base: 'column', lg: 'row' }}
            >
              <Text fontSize={{ base: '1.2rem', lg: '1.5rem' }}>
                Call Now:{' '}
              </Text>
              <Heading
                fontWeight="bold"
                fontSize={{ base: '1.4rem', lg: '3rem' }}
              >
                +234 7000 222 333
              </Heading>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Box bg="brand.purple" py={{ base: '3rem', lg: '1.5rem' }}>
        <Container maxW="114rem">
          <Flex justify="space-between" align="center" color="#fff" w="full">
            <Image
              loading="lazy"
              src="/images/logo.svg"
              alt="logo"
              w={{ base: '12rem', lg: '17rem' }}
            />
            {isLargerThan768px ? (
              <HStack spacing={{ base: '5.7rem' }}>
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.path}
                    color="#ffffff50"
                    fontWeight="bold"
                    fontSize="1.4rem"
                    target="blank"
                  >
                    {link.title}
                  </Link>
                ))}
                <Button
                  variant="orange"
                  size="sm"
                  as="a"
                  href="https://app.ulesson.com/?utm_source=website_home&utm_medium=button&utm_campaign=main_site&utm_content=main_button"
                >
                  TRY IT NOW
                </Button>
              </HStack>
            ) : (
              <Image loading="lazy" alt="ham" src="icons/ham.svg" />
            )}
          </Flex>
        </Container>
      </Box>
    </MotionBox>
  )
}

const links = [
  {
    title: 'My uLesson App',
    path: 'https://ulesson.com/my-ulesson-app',
  },
  {
    title: 'Coding School',
    path: 'https://code.ulesson.com/',
  },
  {
    title: 'Log in',
    path: 'https://app.ulesson.com/?utm_source=website_home&utm_medium=button&utm_campaign=main_site&utm_content=main_button',
  },
]
