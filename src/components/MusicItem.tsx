import { VStack, HStack, Text,} from 'native-base';

import { Ionicons } from '@expo/vector-icons'

type Props = {
  MusicName: string;
}

export function MusicItem({MusicName}: Props){
  return(
    <HStack ml={4} mt={4} alignItems='center'>
      <VStack mr={32}>
        <Text color='white' fontFamily='body' fontSize='sm'>
          {MusicName}
        </Text>

        <Text color='alto.300' fontFamily='body' fontSize='xs'>
          Astrophysics
        </Text>
      </VStack>

    </HStack>
  )
  }