import { useState } from 'react'

import { VStack, Center, Image, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'  
import { useForm, Controller } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { Input } from '@components/Input'
import { Button } from '@components/Button'

import Logo from '@assets/logo.png'


type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Escreva o nome de usuário.'),
  email: yup.string().required('Escreva o E-mail.').email('E-mail inválido.'),
  password: yup.string().required('Escreva a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere.')
})

export function SignUp(){

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  } 

  function handleSignUp({name, email, password, password_confirm}: FormDataProps){
    console.log({name, email, password, password_confirm})
    
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
              errorMessage={errors.name?.message}
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
              errorMessage={errors.password_confirm?.message}
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