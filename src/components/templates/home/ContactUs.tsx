import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export const ContactUs = () => {
  return (
    <Box py="10.7rem">
      <Container maxW="114rem">
        <Flex flexDir={{ base: 'column', lg: 'row' }}>
          <Box
            w={{ base: 'full', lg: '50%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Heading fontSize={{ base: '2rem', lg: 'sectionTitle' }}>
              Contact Us
            </Heading>
            <Text fontSize={{ base: '2rem', lg: 'sectionSubTitle' }} mt="2rem">
              Do you have questions or in need of further clarifications? Speak
              to a Counsellor
            </Text>
            <Box mt="2rem" mx={{ base: 'auto', lg: '0' }}>
              <PhoneNo
                icon="/icons/phone.svg"
                phone="+234 7000 222 333"
                color="#7B7FDA"
              />
              <PhoneNo
                icon="/icons/whatsapp.svg"
                phone="+234 7040 060 013"
                color="#68BC98"
              />
            </Box>
          </Box>
          <Box w={{ base: 'full', lg: '50%' }}></Box>
        </Flex>
      </Container>
    </Box>
  )
}

const PhoneNo = ({
  phone,
  icon,
  color,
}: {
  icon: string
  phone: string
  color: string
}) => {
  return (
    <HStack spacing="2rem" justify={{ base: 'center', lg: 'flex-start' }}>
      <Image loading="lazy" w="2.5rem" alt="icon" src={icon} />
      <Heading fontSize="3rem" fontWeight="700" color={color}>
        {phone}
      </Heading>
    </HStack>
  )
}
