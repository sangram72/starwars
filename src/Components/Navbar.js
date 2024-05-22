// components/Navbar.js
import React from 'react';
import { Box, Flex, Link as ChakraLink, Text,Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = ({ showFavorites, toggleFavoritesVisibility }) => {
  return (
    <Box bg="white" color="black" py={4}>
      <Flex justify="space-between" align="center" px={8} maxW="container.lg" mx="auto">
        <NextLink href="/" passHref>
          <ChakraLink>
            <Text fontWeight="bold">Star Wars Characters</Text>
          </ChakraLink>
        </NextLink>
        <Flex>
          <NextLink href="/" passHref>
            <ChakraLink mx={2}>Home</ChakraLink>
          </NextLink>
          
         
            {/* <ChakraLink mx={2} onClick={toggleFavoritesVisibility}>
             
            </ChakraLink> */}
           
            {showFavorites ?
             <Button colorScheme='white' size='xs' variant='outline' onClick={toggleFavoritesVisibility}>Hide Favorites</Button>:
              <Button colorScheme='white' size='xs' variant='outline' onClick={toggleFavoritesVisibility}>Favorites</Button>
             }
   
   
          {/* <NextLink href="/favorites" passHref>
            <ChakraLink mx={2}>Favorites</ChakraLink>
          </NextLink> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
