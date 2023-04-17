import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest}: Props){
  return(
    <NativeBaseButton
      w={74}
      h={11} 
      bg='green.500'
      borderRadius={10}
      mt={2}
      _pressed={{
        bg: 'green.400'
      }}
      
      {...rest}
    >
      <Text color='white' fontFamily='body' fontSize='md'> 
        {title} 
      </Text>
    </NativeBaseButton>
  )
}