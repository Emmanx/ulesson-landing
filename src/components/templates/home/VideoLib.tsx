import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Download } from 'components/buttons'
import React from 'react'

export const VideoLib = () => {
  return (
    <Box w="full" bg="brand.grey" pt="8rem" pb="12rem">
      <Container maxW="114rem">
        <Box textAlign="center" maxW="105rem" mx="auto">
          <Heading fontSize={{ base: '2rem', lg: 'sectionTitle' }}>
            Vast Library of Video Lessons, Quizzes and Exams
          </Heading>
          <Text fontSize={{ base: '2rem', lg: 'sectionSubTitle' }} mt="2rem">
            What we learn with pleasure, we never forget. With thousands of
            recorded videos with rich animations covering every topic, learning
            is both effective and fun at the same time.
          </Text>
        </Box>

        <Box w="full" h="30rem" my="6.5rem" />

        <Download justify="center" />
      </Container>
    </Box>
  )
}
