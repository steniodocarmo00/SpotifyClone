import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Center } from 'native-base';

import Logo from '@assets/logo.png'

import { NavigatorRoutesProps } from '@routes/app.routes'

export function SplashScreen(){
  const navigation = useNavigation<NavigatorRoutesProps>();

  useEffect(() => {
    setTimeout(() => {navigation.navigate('signIn')}, 1000) }, [])
 
  return(
    <Center flex={1}>
      <Image 
        source={Logo}
        alt='Logo Spotify'
      />
    </Center>
  )  
}
