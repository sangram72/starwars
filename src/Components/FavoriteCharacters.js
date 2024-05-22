
"use client"
import { Box, Heading, Text, VStack,Flex } from '@chakra-ui/react';
import CharacterItem from './CharacterItem';

const FavoriteCharacters = ({ favorites, toggleFavorite,character }) => {
  return (
    // <Box p={4} borderWidth={1} borderRadius="lg" width="100%">
      <>
      {/* // <Box p={4} borderWidth={1} borderRadius="lg" width="100%"> */}
      <Heading as="h2" size="md" color="white" textAlign="center">Favorites</Heading><Flex wrap="wrap" justify="space-between" width="100%" marginTop="5%">
        {favorites.map((character) => (
          <CharacterItem
            key={character.name}
            character={character}
            toggleFavorite={toggleFavorite}
            favorites={favorites} />
        ))}

      </Flex>
      </>
    // </Box>
  );
};

export default FavoriteCharacters;






