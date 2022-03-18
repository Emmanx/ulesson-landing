import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { Download } from 'components/buttons'
import React from 'react'

export const Hero = (): JSX.Element => {
  return (
    <Box
      bg="brand.purple"
      color="brand.white"
      pb={{ base: '2rem', lg: '9rem' }}
      pt={{ base: '17rem', md: '23rem' }}
    >
      <Container maxW="114rem">
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'center' }}
        >
          <Box
            w={{ base: '100%', lg: '50%' }}
            maxW={{ base: '34.5rem', lg: '59rem' }}
          >
            <Heading fontSize={{ base: '3.8rem', lg: '6rem' }}>
              Get The Learning App for{' '}
              <Text as="span" color="brand.green">
                Better School Grades
              </Text>
            </Heading>
            <Text
              mt={{ base: '2rem', lg: '0' }}
              fontSize={{ base: '1.6rem', lg: '2.2rem' }}
            >
              Learn and Understand Easily.{' '}
              <Text as="span" fontWeight="bold">
                Never Repeat Classes, Pass Exams
              </Text>{' '}
              in One Sitting.
            </Text>
            <Download mt={{ base: '3rem', lg: '5.2rem' }} />
          </Box>
          <Box w={{ base: '100%', lg: '50%' }}>
            <Box h="30rem" />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
