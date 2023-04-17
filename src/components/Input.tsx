import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({...rest}: IInputProps){
  return(
    <NativeBaseInput 
      bg='zambezi.600'
      h={11}
      w={74}
      px={2}
      borderWidth={0}
      borderRadius={10}
      fontSize='lg'
      fontFamily='body'
      color='white'
      mb={8}
      _focus={{
        bg: 'zambezi.800',
        borderWidth: '2',
        borderColor: '#1c7939',
      }}
      {...rest}
    />
  )
}