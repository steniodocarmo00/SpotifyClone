import { VStack, Text } from "native-base";

export function LyricsCard(){
  return(
    
    <VStack bg='red' alignSelf='center' h={87} w={87} borderRadius={10}>
      <Text color='white' fontFamily='bodybold' fontSize='md' ml={4} mt={4} mb={6}>
        Letra
      </Text>
      <Text color='white' fontFamily='heading' fontSize='xl' ml={4} mr={4}>
        I wish that we where on TV Just like in pokemon
      </Text>
    </VStack>
  )
}