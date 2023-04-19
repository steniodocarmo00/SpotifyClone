import { HStack, VStack , Text, Image, Icon, Slider, Pressable, IPressableProps} from 'native-base';
import { Foundation } from '@expo/vector-icons'

type Props = IPressableProps

export function MiniPlayer({...rest}: Props){
  return(
    <Pressable {...rest}>
      <HStack bg='#313131' w={96} alignItems='center' alignSelf='center' borderRadius={8}>
        <HStack ml={2} mt={2} mb={-2} textAlign='center'>
          <Image 
            source={{uri: 'https://i.scdn.co/image/ab67616d0000b273d491c823e85c89df4e75d7fe'}}
            alt="Playlist Icon"
            h={12}    
            w={12}
            borderRadius={4}
            mr={4}
          />
          <VStack mt={1}>
            <Text color='white' fontFamily='bodybold' fontSize='xs'>Malfunction</Text>
            <Text color='white' fontFamily='body' fontSize='xs'>Astrophysics</Text>
            <Slider w={92} right={16} mt={1}>
              <Slider.Track />
            </Slider>
          </VStack>
        </HStack>

        <Icon 
          as={Foundation}
          name='play'
          color='white'
          size={8}
          right={24}
        />
      </HStack>
    </Pressable>

  )
}