import { extendTheme } from 'native-base'

export const THEME = extendTheme({
    colors: {
      black: {
        950: '#000000',
        900: '#313131'
      },
      zambezi: {
        600: '#605454',
        800: '#494141'
      },
      red: '#DC143C',
      green: {
        500: '#2EBD59',
        400: '#54D47A'
      },
      alto: {
        300: '#D9D9D9'
      },
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Inter_800ExtraBold',
      body: 'Inter_400Regular',
      bodybold: 'Inter_700Bold'
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
      13: 52,
      22: 88,
      74: 296,
      87: 348,
      92: 368
    }
})