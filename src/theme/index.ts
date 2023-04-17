import { extendTheme } from 'native-base'

export const THEME = extendTheme({
    colors: {
      gray: {
        950: '#1E1E1E'
      },
      zambezi: {
        600: '#605454',
        800: '#494141'
      },
      green: {
        500: '#2EBD59'
      },
      alto: {
        300: '#D9D9D9'
      },
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Inter_800ExtraBold',
      body: 'Inter_400Regular'
    },
    fontSizes: {
      xs: 12,
      md: 16,
      lg: 18,
      xl: 20,
      xl2: 25,
      xl3: 30,
      xl4: 40,
    },
    sizes: {
      11: 44,
      74: 296,
    }
})