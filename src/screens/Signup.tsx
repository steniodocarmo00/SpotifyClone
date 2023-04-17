import { VStack, Center } from 'native-base'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Signup(){
  return(
    <VStack flex={1} bg='#1E1E1E' alignItems='center' justifyContent='center'>
      <Center>

        <Input 
          placeholder='Nome'
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
        />
      </Center>
    </VStack>
  )
}