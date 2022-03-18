import {
  Button,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Image,
} from '@chakra-ui/react'
import React from 'react'

const url =
  'https://app.adjust.com/7ifql5d_id7vs43?deep_link=ulesson%3A%2F%2F&campaign=main_website&adgroup=homepage&creative=qr_code'

export const Download = ({ ...rest }: FlexProps) => {
  return (
    <Flex align="center" {...rest}>
      <Button
        variant="orange"
        size="md"
        mr="1.8rem"
        as="a"
        target="blank"
        href={url}
      >
        DOWNLOAD NOW
      </Button>
      <HStack spacing="1.4rem">
        <StoreIcon icon="/icons/playstore.svg" />
        <StoreIcon icon="/icons/appstore.svg" />
      </HStack>
    </Flex>
  )
}

const StoreIcon = ({ icon }: { icon: string }) => {
  return (
    <IconButton
      aria-label="Play Store"
      bg="brand.white"
      rounded="50%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w={{ base: '5rem', lg: '7.3rem' }}
      h={{ base: '5rem', lg: '7.3rem' }}
      as="a"
      target="blank"
      href={url}
    >
      <Image
        loading="lazy"
        w={{ base: '2rem', lg: '4rem' }}
        alt="Play Store "
        src={icon}
      />
    </IconButton>
  )
}
