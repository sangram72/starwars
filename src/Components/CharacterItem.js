

"use client"

import { Box, Button, Text, Link as ChakraLink ,Image} from '@chakra-ui/react';
import NextLink from 'next/link';
import { WarningIcon,StarIcon } from '@chakra-ui/icons';

const CharacterItem = ({ character, toggleFavorite, favorites }) => {
  return (
    <Box
    p={4}
    borderWidth={1}
    bg="white"
    borderRadius="lg"
    width={{ base: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.33% - 12px)', lg: 'calc(25% - 12px)' }}
    minWidth="300px"
    boxShadow="md"
    _hover={{ bg: 'teal.100' }}
    mb={{ base: 4, lg: 4 }}
    mr={{ base: 0, sm: 4, md: 4, lg: 4 }}
    >
           <Image src="/starwars.jpg"  />
      <NextLink href={`/Character?id=${character.id}`} >
  
          <Text fontWeight="bold">{character.name}</Text>
          <Text>Height: {character.height} cm</Text>
          <Text>Mass: {character.mass} kg</Text>
 
      </NextLink>
      <Button
size='sm'
  colorScheme={favorites.find((fav) => fav.name === character.name)}
  onClick={() => toggleFavorite(character)}
>
  {favorites.find((fav) => fav.name === character.name) ? <WarningIcon w={4} h={4} color="red.500" /> : <StarIcon w={4} h={4} color="red.500" />}
</Button>
    </Box>
  );
};

export default CharacterItem;








