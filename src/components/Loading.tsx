import { Center, Image, Spinner } from "native-base";

import Logo from '@assets/logo.png'

export function Loading(){
  return(
    <Center flex={1} bg='#000000'>
      <Image 
        source={Logo}
        alt="Logo Spotify"
      />
      <Spinner color='green.500' mt={32} size='lg'/>
    </Center>
  )
}