import { VStack, Center, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'  

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import Logo from '@assets/logo.png'

export function SignUp(){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <VStack flex={1} alignItems='center' justifyContent='center'>
      <Center>
        <Image 
          source={Logo}
          alt='Spotify Logo'
        />

        <Input 
          placeholder='Nome'
          mt={24}
        />

        <Input 
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input 
          placeholder='Senha'
          secureTextEntry
        />

        <Button 
          title='Criar conta' 
        />
        <Button 
          title='Voltar para login.' 
          variant='ghost' 
          onPress={handleGoBack}
        />
      </Center>
    </VStack>
  )
}