import { VStack, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import { Input } from '@components/Input'
import { Button } from '@components/Button'


export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp')
  }

  return(
    <VStack flex={1} alignItems='center' justifyContent='center'>
      <Center>
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