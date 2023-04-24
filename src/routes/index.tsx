import {  Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppRoutes } from '@routes/app.routes';
import { AuthRoutes } from '@routes/auth.routes';

export function Routes(){

    const theme = DefaultTheme;
    theme.colors.background = '#000000'

  return(
    <Box flex={1} bg='black.900'>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
    
  )
}