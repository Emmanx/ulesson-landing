export const buttonStyles = {
  baseStyle: {
    borderRadius: '0.4rem',
    cursor: 'pointer',
    transition: 'all 0.6s',
    _hover: {
      transform: 'scale(1.02)',
    },
    _focus: {
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: { base: '1.1rem', lg: '1.3rem' },
      fontWeight: '700',
      px: '3rem',
      py: '1.2rem',
      h: { base: '5rem' },
    },
    md: {
      fontSize: { base: '1.3rem', lg: '1.5rem' },
      fontWeight: '800',
      px: '3rem',
      py: '1.2rem',
      h: { base: '5rem', lg: '7.3rem' },
    },
  },
  variants: {
    transparent: {
      bg: 'transparent',
    },
    orange: {
      bg: 'brand.orange',
      color: 'brand.white',
      _hover: {
        _disabled: {
          bg: 'brand.orange',
        },
      },
    },
  },
}
