import { Box } from '@chakra-ui/react'
import { Footer, Header } from 'layouts'
import {
  AllYouNeed,
  ContactUs,
  Hero,
  VideoLib,
  WhyTrustUs,
} from 'components/templates/home'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>uLesson</title>
        <meta name="description" content="Starter Kit for Frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />
      <WhyTrustUs />
      <AllYouNeed />
      <VideoLib />
      <ContactUs />

      <Footer />
    </Box>
  )
}

export default Home
