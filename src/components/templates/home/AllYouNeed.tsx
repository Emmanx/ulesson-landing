import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Download } from 'components/buttons'
import React from 'react'

export const AllYouNeed = () => {
  return (
    <Box pt="5rem" pb="10rem">
      <Container maxW="114rem">
        <Flex flexDir={{ base: 'column', lg: 'row' }} align="center">
          <Box w={{ base: '100%', lg: '50%' }} mb={{ base: '3rem', lg: '0' }}>
            <Box
              maxW="48rem"
              textAlign={{ base: 'center', lg: 'left' }}
              mx={{ base: 'auto', lg: '0' }}
            >
              <Heading
                fontSize={{ base: '2rem', lg: 'sectionTitle' }}
                maxW={{ base: '23rem', lg: 'full' }}
                mx={{ base: 'auto', lg: '0' }}
              >
                Everything You Need To Excel In School
              </Heading>
              <Text
                fontSize={{ base: '2rem', lg: 'sectionSubTitle' }}
                mt="2rem"
              >
                Detailed, yet simple explanations, homework help, practice
                exams, and more.{' '}
                <Text as="span" fontWeight="bold">
                  Goodbye failure, hello good grades!
                </Text>
              </Text>
              <Download
                justify={{ base: 'center', lg: 'flex-start' }}
                mt="3rem"
              />
            </Box>
          </Box>
          <Box w={{ base: '100%', lg: '50%' }}>
            <Image
              loading="lazy"
              w="full"
              src="/images/appscreen.svg"
              alt="App Screen"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
