import { HStack, Heading, VStack, Center } from "native-base";

import { PlaylistCardRectangle } from "@components/PlaylistCardRectangle";

export function Home(){
  return(
    <VStack flex={1}>
      <Heading color='white' mt={16} ml={2}>
        Bem Vindo
      </Heading>

      <Center>
        <HStack mt={8}>
          <PlaylistCardRectangle />
          <PlaylistCardRectangle />
        </HStack>

        <HStack>
          <PlaylistCardRectangle />
          <PlaylistCardRectangle />
        </HStack>

        <HStack>
          <PlaylistCardRectangle />
          <PlaylistCardRectangle />
        </HStack>
      </Center>

      <Heading color='white' mt={12} ml={2}>
        Tocadas Recentemente
      </Heading>
    </VStack>
  )
}