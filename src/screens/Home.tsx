import { HStack, VStack, Center,Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { NavigatorRoutesProps } from "@routes/app.routes";

import { ScrollView } from "native-base";
import { PlaylistCardRectangle } from "@components/PlaylistCardRectangle";
import { PlaylistCardSquare } from "@components/PlaylistCardSquare";
import { MiniPlayer } from "@components/MiniPlayer";

export function Home(){
  const navigation = useNavigation<NavigatorRoutesProps>();
  
  function musicPlayerUp(){
    navigation.navigate('MusicPlayer')
  }

  return(
    <ScrollView>
      <VStack flex={1}>
      <Text color='white' mt={12} ml={2} fontFamily='heading' fontSize='xl'>
        Bem vindo
      </Text>

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

      <Text color='white' mt={16} mb={3} ml={2} fontFamily='heading' fontSize='xl'>
        Tocados recentemente
      </Text>
      
      <HStack>
        <PlaylistCardSquare />
        <PlaylistCardSquare />
        <PlaylistCardSquare />
        </HStack>

      <Text color='white' mb={3} ml={2} fontFamily='heading' fontSize='xl'>
        Top 50 da semana
      </Text>

      <HStack>
        <PlaylistCardSquare />
        <PlaylistCardSquare />
        <PlaylistCardSquare />
      </HStack>

      <MiniPlayer onPress={musicPlayerUp}/>

    </VStack>
    </ScrollView>
    
  )
}