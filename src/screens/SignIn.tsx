import { VStack, Center, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { NavigatorRoutesProps } from '@routes/auth.routes'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { auth } from '../../firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm, Controller } from 'react-hook-form';

import BackgroundImg from '@assets/background.png'

type FormDataProps = {
  email: string;
  password: string;
}

export function SignIn(){

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>()

  const navigation = useNavigation<NavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp')
  }

  function handleSignIn({email, password}: FormDataProps){
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      Alert.alert('Logado com Sucesso!')
    })
    .catch((error: Error) => console.log(error))
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
      <Controller 
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Login'
              onChangeText={onChange}
              mt={24}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller 
          control={control}
          name='password'
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Senha'
              secureTextEntry 
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button 
          title='Entrar'
          onPress={handleSubmit(handleSignIn)}
        />

        <Button title='Criar conta.' 
          variant='ghost'
          onPress={handleNewAccount} 
        />
      </Center>
    </VStack>
  )
}