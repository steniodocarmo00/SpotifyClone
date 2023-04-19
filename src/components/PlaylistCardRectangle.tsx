import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HStack, Image, Text } from 'native-base';

import Icon from '@assets/playlistIcon.png';

type Props = TouchableOpacityProps 

export function PlaylistCardRectangle({...rest}: Props){
  return(
    <TouchableOpacity {...rest}>
      <HStack alignItems='center' bg='#313131' mr={2} mb={2} borderRadius={4}>
        <Text color='white' fontFamily='Inter_700Bold' fontSize='md' ml={2}>
          Texto
        </Text>

        <Image 
          source={Icon}
          alt="Playlist Icon"
          h={12}    
          w={12}
          ml={20}
          borderRadius={4}
        />
      </HStack>
    </TouchableOpacity>
  )
}