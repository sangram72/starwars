// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import { Container, VStack, Spinner } from '@chakra-ui/react';
import CharacterList from '../Components/CharacterList';
import FavoriteCharacters from '../Components/FavoriteCharacters';
import Navbar from '../Components/Navbar';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results.map((character, index) => ({ ...character, id: index + 1 })));
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    const index = favorites.findIndex((fav) => fav.name === character.name);
    if (index === -1) {
      setFavorites([...favorites, character]);
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <>
      <Navbar hasFavorites={favorites.length > 0} showFavorites={showFavorites} toggleFavoritesVisibility={() => setShowFavorites(!showFavorites)} />
      <Container maxW="container.md" py={4} >
        <VStack spacing={4}>
          {loading ? (
            <Spinner size="xl" />
          ) : (
            <>
              {showFavorites ? (
                <FavoriteCharacters favorites={favorites} toggleFavorite={toggleFavorite} />
              ) : (
                <CharacterList characters={characters} toggleFavorite={toggleFavorite} favorites={favorites} />
              )}
            </>
          )}
        </VStack>
      </Container>
    </>
  );
}
