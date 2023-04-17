import { VStack, Center } from 'native-base'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn(){
  return(
    <VStack flex={1} bg='#1E1E1E' alignItems='center' justifyContent='center'>
      <Center>
        <Input 
          placeholder='Login'
        />
        <Input 
          placeholder='Senha'
          secureTextEntry
        />

        <Button title='Entrar' />
      </Center>
    </VStack>
  )
}