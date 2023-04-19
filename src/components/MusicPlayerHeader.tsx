import { VStack, HStack, Text, Icon, IconButton, IIconButtonProps, Pressable, IPressableProps } from 'native-base';

import { Ionicons } from '@expo/vector-icons'

type Props = IIconButtonProps & IPressableProps & {
  iconButtonOnPress?: () => void,
  pressableOnPress?: () => void
}

export function MusicPlayerHeader({iconButtonOnPress, pressableOnPress}: Props){
  return(
    <HStack mt={12} alignItems='center'>
      <IconButton onPress={iconButtonOnPress} ml={4} mr={24}>
        <Icon 
          as={Ionicons}
          name='chevron-down-sharp'
          color='white'
          size={8}
        />
      </IconButton>

      <VStack alignItems='center'>
        <Text color='white'>Tocando Álbum:</Text>
        <Pressable w={12} h={6} onPress={pressableOnPress}>
          <Text color='white'>Álbum</Text>
        </Pressable>
      </VStack>
      
      <IconButton ml={20}>
        <Icon 
          as={Ionicons}
          name='md-ellipsis-vertical'
          color='white'
          size={6}
          
        />
      </IconButton>
    </HStack>
  )
}