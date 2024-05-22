
"use client"
import { VStack, Flex } from '@chakra-ui/react';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters, toggleFavorite, favorites }) => {
  return (
    <VStack spacing={4} align="center">
   <Flex wrap="wrap" justify="space-between" width="100%">
        {characters.map((character) => (
          <CharacterItem
            key={character.name}
            character={character}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </Flex>
    </VStack>
  );
};

export default CharacterList;
