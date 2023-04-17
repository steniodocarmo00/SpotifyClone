import { VStack, Center } from 'native-base'
import { useNavigation } from '@react-navigation/native'  

import { Input } from '@components/Input'
import { Button } from '@components/Button'


export function SignUp(){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <VStack flex={1} alignItems='center' justifyContent='center'>
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
          onPress={handleGoBack}
        />
      </Center>
    </VStack>
  )
}