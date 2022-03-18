import { buttonStyles } from './components'
import { colors, fontSizes, fontWeights, fonts } from './foundations'

import { extendTheme } from '@chakra-ui/react'
import styles from './global'

export default extendTheme({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  styles,
  components: {
    Button: buttonStyles,
  },
})
