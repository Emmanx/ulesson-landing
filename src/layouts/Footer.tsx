import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  Link,
  HStack,
} from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Box w="full" bg="brand.grey" py="6rem">
      <Container maxW="128rem">
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align="center"
        >
          <Image
            loading="lazy"
            w="14.5rem"
            alt="logo"
            src="/images/footer-logo.svg"
          />
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            align="center"
            mt={{ base: '2rem', lg: '0' }}
          >
            {links.map((link) => (
              <Link
                display="inline-block"
                mx="2.4rem"
                my={{ base: '1rem', lg: '0' }}
                fontSize={{ base: '2rem', lg: '1.6rem' }}
                key={link.title}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </Flex>
          <HStack spacing="3rem" mt={{ base: '2rem', lg: '0' }}>
            {socialLinks.map((link) => (
              <Link key={link.title} href={link.path} target="blank">
                <Image
                  loading="lazy"
                  src={`/icons/${link.title}.svg`}
                  h="2rem"
                  alt={link.title}
                />
              </Link>
            ))}
          </HStack>
        </Flex>
        <Box mt="7rem" maxW="104rem" mx="auto">
          <Text opacity="0.3" fontSize="1.8rem">
            uLesson leverages best in-class teachers, media, and technology to
            create high-quality, affordable and accessible education for
            students. The uLesson app offers students in Primary, Junior and
            Senior Secondary School a holistic learning experience as well as
            those preparing for WASSCE, JAMB, NECO and GCE exams.
            <br /> <br />
            Our app features over 10,000 interactive quizzes with detailed
            solutions; making it an excellent tool for preparing for and
            cracking exams. Students in SSS/SHS can take advantage of this
            quality resource put together by subject matter experts to pass
            their exams. It also helps students learn time management, exam
            formats, and accuracy skills.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

const links = [
  {
    title: 'Blog',
    path: 'https://blog.ulesson.com/',
  },
  {
    title: 'Privacy Policy',
    path: 'https://ulesson.com/privacy',
  },
  {
    title: 'Terms of Services',
    path: 'https://blog.ulesson.com/terms-conditions/',
  },
  {
    title: 'help/FAQ',
    path: 'https://ulesson.com/faq',
  },
]

const socialLinks = [
  {
    title: 'twitter',
    path: 'https://twitter.com/ulessonapp',
  },
  {
    title: 'facebook',
    path: 'https://www.facebook.com/ulessonapp',
  },
  {
    title: 'youtube',
    path: 'https://www.youtube.com/channel/UCBwZHGNG_rnnhTm-QGZndSA',
  },
  {
    title: 'instagram',
    path: 'https://www.instagram.com/ulessonapp/',
  },
]
