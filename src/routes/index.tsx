import { useEffect, useState } from 'react';

import { Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AppRoutes } from '@routes/app.routes';
import { AuthRoutes } from '@routes/auth.routes';

import { auth } from '../../firebase.config'
import { onAuthStateChanged, User } from 'firebase/auth'  

export function Routes(){

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(undefined)
      }
    })

    return subscriber
  
  })

    const theme = DefaultTheme;
    theme.colors.background = '#000000'

  return(
    <Box flex={1} bg='black.900'>
      <NavigationContainer theme={theme}>
        {user ? <AppRoutes/> : <AuthRoutes/>}
      </NavigationContainer>
    </Box>
    
  )
}