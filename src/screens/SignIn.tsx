import { VStack, Center, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { NavigatorRoutesProps } from '@routes/app.routes'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import BackgroundImg from '@assets/background.png'

export function SignIn(){

  const navigation = useNavigation<NavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp')
  }

  function handleLogin(){
    navigation.navigate('home')
  }

  return(
    <VStack flex={1}>
      <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
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

        <Button 
          title='Entrar'
          onPress={handleLogin} 
        />

        <Button title='Criar conta.' 
          variant='ghost'
          onPress={handleNewAccount} 
        />
      </Center>
    </VStack>
  )
}