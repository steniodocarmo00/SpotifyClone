import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HStack, Image, Text, VStack } from 'native-base';

type Props = TouchableOpacityProps & {
  PlaylistName: string;
  PlaylistImage: string;
}

export function PlaylistCardSquare({PlaylistName, PlaylistImage, ...rest}: Props){
  return(
    <TouchableOpacity {...rest}>
        <HStack alignItems='center'>
          <VStack ml={7}>
            <Image 
              source={{uri: PlaylistImage}}
              alt="Playlist Icon"
              h={24}
              w={24}
              mb={4}
            />
          
            <Text color='white' fontSize='md' mb={5}>
              {PlaylistName}
            </Text>
          </VStack>
        </HStack>
      
    </TouchableOpacity>
  )
}