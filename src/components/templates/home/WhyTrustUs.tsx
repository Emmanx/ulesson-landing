import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import { Download } from 'components/buttons'
import React from 'react'

export const WhyTrustUs = () => {
  return (
    <Box w="full" bg="brand.grey" pt={{ base: '4rem', lg: '8rem' }} pb="6rem">
      <Container maxW="114rem">
        <Box textAlign="center" maxW="60rem" mx="auto">
          <Heading fontSize={{ base: '2rem', lg: 'sectionTitle' }}>
            Why you should trust us!
          </Heading>
          <Text fontSize={{ base: '2rem', lg: 'sectionSubTitle' }} mt="2rem">
            Read reviews about uLesson from thousands of learners whose results
            have improved.
          </Text>
        </Box>
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          mt="7rem"
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
        >
          <Box w={{ base: 'full', lg: 'auto' }}>
            <Box h="30rem" mb="3.5rem" />
            <Download justify={{ base: 'center', lg: 'flex-start' }} />
          </Box>
          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            spacing={{ base: '0', md: '3.5rem' }}
            mt={{ base: '3.5rem', lg: '0' }}
          >
            <TestimonialCard
              name="Anike Victory"
              body="Very good learning app , I advise you to get this app it will help you in your studies, I was seen as a dull student at school, now am sharp and my grades are improving . I hope this app will always be here still Future generation to use"
              icon="/icons/playstore.svg"
            />
            <TestimonialCard
              name="Eze Ebube Success"
              body="I find this app a very useful app for students, i'm most impressed by the way we practice by concepts.it's a really great app and i'll endaevour each student to have this on their phones. On a truthful note, it's one of a kind that does not come with cumbersome notes instead practically, i'm rating."
              icon="/icons/appstore.svg"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

const TestimonialCard = ({
  name,
  body,
  icon,
}: {
  name: string
  body: string
  icon: string
}) => {
  return (
    <Box
      w="full"
      maxW="27.5rem"
      minH="30rem"
      bg="brand.white"
      rounded="8.5px"
      mb={{ base: '2.8rem', md: '0' }}
      pos="relative"
      boxShadow="1.15 1.15 10.765px rgba(48, 20, 70, 0.1)"
    >
      <Box pt="2.4rem" pb="2rem" px="2.3rem">
        <Heading fontSize="1.3rem" fontWeight="800">
          {name}
        </Heading>
        <Rating />
      </Box>

      <Box w="full" h="0.5px" bg="#00000020" />

      <Text fontSize="1.2rem" p="2.3rem" textAlign="center">
        {body}
      </Text>

      <Image
        loading="lazy"
        alt="icon"
        pos="absolute"
        w="2rem"
        src={icon}
        bottom="2rem"
        right="2rem"
      />
    </Box>
  )
}

const Rating = () => {
  return (
    <svg
      width="77"
      height="12"
      viewBox="0 0 77 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
        fill="#EA7052"
      />
      <path
        d="M38.5 0L39.9593 4.49139H44.6819L40.8613 7.26722L42.3206 11.7586L38.5 8.98278L34.6794 11.7586L36.1387 7.26722L32.3181 4.49139H37.0407L38.5 0Z"
        fill="#EA7052"
      />
      <path
        d="M22.5 0L23.9593 4.49139H28.6819L24.8613 7.26722L26.3206 11.7586L22.5 8.98278L18.6794 11.7586L20.1387 7.26722L16.3181 4.49139H21.0407L22.5 0Z"
        fill="#EA7052"
      />
      <path
        d="M54.5 0L55.9593 4.49139H60.6819L56.8613 7.26722L58.3206 11.7586L54.5 8.98278L50.6794 11.7586L52.1387 7.26722L48.3181 4.49139H53.0407L54.5 0Z"
        fill="#EA7052"
      />
      <path
        d="M70.5 0L71.9593 4.49139H76.6819L72.8613 7.26722L74.3206 11.7586L70.5 8.98278L66.6794 11.7586L68.1387 7.26722L64.3181 4.49139H69.0407L70.5 0Z"
        fill="#EA7052"
      />
    </svg>
  )
}
