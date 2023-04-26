import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest}: Props){
  
  const invalid = !!errorMessage || isInvalid; 

  return(
    <FormControl isInvalid={invalid} mb={8} alignItems='center'>
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
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red'
        }}
        _focus={{
          bg: 'zambezi.800',
          borderWidth: '2',
          borderColor: '#1c7939',
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
    
  )
}