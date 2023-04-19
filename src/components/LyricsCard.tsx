import { VStack, Text } from 'native-base';

export function LyricsCard(){
  return(
    
    <VStack bg='red' alignSelf='center' h={87} w={87} borderRadius={10}>
      <Text color='white' fontFamily='bodybold' fontSize='md' ml={4} mt={4} mb={6}>
        Letra
      </Text>
      <Text color='white' fontFamily='heading' fontSize='xl' ml={4} mr={4}>
      Malfunction now{'\n'}
      Couldn't see you there{'\n'}
      Tired of my flaws{'\n'}
      Tired of it all{'\n'}
      {'\n'}
      Laughing at the wind{'\n'}
      Bursting into tears{'\n'}
      Tired of my faults{'\n'}
      Ever tired anyhow ...{'\n'} 
      </Text>
    </VStack>
  )
}