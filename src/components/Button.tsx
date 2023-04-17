import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, variant ,...rest}: Props){
  return(
    <NativeBaseButton
      w={74}
      h={11} 
      bg={variant === 'ghost' ? 'transparent' : 'green.500'}
      borderRadius={10}
      mt={4}
      _pressed={{
        bg: variant === 'ghost' ? '#313131' : 'green.400'
      }}
      
      {...rest}
    >
      <Text color='white' fontFamily='body' fontSize='md'> 
        {title} 
      </Text>
    </NativeBaseButton>
  )
}