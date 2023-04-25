import { useState } from 'react'

import { VStack, Center, Image } from 'native-base'
import { useNavigation } from '@react-navigation/native'  
import { useForm, Controller } from 'react-hook-form'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import Logo from '@assets/logo.png'

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp(){

  const { control, handleSubmit } = useForm<FormDataProps>();

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  } 

  function handleSignUp({name, email, password, password_confirm}: FormDataProps){
    console.log(name, email, password, password_confirm)
    
  }

  return(
    <VStack flex={1} alignItems='center' justifyContent='center'>
      <Center>
        <Image 
          source={Logo}
          defaultSource={Logo}
          alt='Spotify Logo'
        />

        <Controller 
          control={control}
          name='name'
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Nome'
              onChangeText={onChange}
              mt={24}
              value={value}
            />
          )}
        />

        <Controller 
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={onChange}
              value={value}
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
            />
          )}
        />
        <Controller 
          control={control}
          name='password_confirm'
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Confirme a senha'
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType='send'
            />
          )}
        />

        <Button 
          title='Criar conta' 
          onPress={handleSubmit(handleSignUp)}
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