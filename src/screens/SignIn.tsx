import { VStack, Center, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import BackgroundImg from '@assets/background.png'

export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp')
  }

  return(
    <VStack flex={1}>
      <Image 
        source={BackgroundImg}
        alt='Spotify signin background'
        left={1}
        position='absolute'
      />
      
      <Center mt={96}>
        <Input 
          placeholder='Login'
        />
        <Input 
          placeholder='Senha'
          secureTextEntry
        />

        <Button title='Entrar' />

        <Button title='Criar conta.' 
          variant='ghost'
          onPress={handleNewAccount} 
        />
      </Center>
    </VStack>
  )
}