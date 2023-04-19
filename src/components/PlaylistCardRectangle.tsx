import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HStack, Image, Text, VStack } from 'native-base';

type Props = TouchableOpacityProps & {
  PlaylistName: string;
  PlaylistImage: string;
}

export function PlaylistCardRectangle({PlaylistName, PlaylistImage ,...rest}: Props){
  return(
    <TouchableOpacity {...rest}>
      <HStack alignItems='center' bg='#313131' mr={2} mb={2} borderRadius={4} w={46}>
        <Image 
          source={{uri: PlaylistImage}}
          alt="Playlist Icon"
          h={12}    
          w={12}
          borderRadius={4}
        />
        
        <VStack>
          <Text color='white' fontFamily='Inter_700Bold' fontSize='md' ml={2}>
            {PlaylistName}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  )
}