import { VStack, HStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Ionicons } from '@expo/vector-icons'

type Props = TouchableOpacityProps

export function MusicPlayerHeader({...rest}: Props){
  return(
    <HStack mt={12} alignItems='center' alignSelf='center' mb={20}>
      <TouchableOpacity {...rest}>
        <Icon 
          as={Ionicons}
          name='chevron-down-sharp'
          color='white'
          size={8}
          right={24}
        />
      </TouchableOpacity>

      <VStack alignItems='center'>
        <Text color='white'>Tocando Álbum:</Text>
        <Text color='white'>Álbum</Text>
      </VStack>
      
      <TouchableOpacity>
        <Icon 
          as={Ionicons}
          name='md-ellipsis-vertical'
          color='white'
          size={6}
          left={24}
        />
      </TouchableOpacity>
    </HStack>
  )
}