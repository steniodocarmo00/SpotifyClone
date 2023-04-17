import { VStack, Center } from 'native-base'

import { Input } from '@components/Input'

export function SignIn(){
  return(
    <VStack flex={1} bg='#1E1E1E' alignItems='center' justifyContent='center'>
      <Center>
        <Input placeholder='LOGIN'/>
        <Input placeholder='SENHA'/>
      </Center>
    </VStack>
  )
}