
"use client"
import { useEffect, useState } from 'react';
import { Container,Spinner } from '@chakra-ui/react';
import CharacterDetail from '../../Components/CharacterDetail';

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const query = new URLSearchParams(window.location.search);
      const id = query.get('id');

      if (id) {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${id}/`);
          const data = await response.json();
          const films = await Promise.all(
            data.films.map(async (filmUrl) => {
              const filmResponse = await fetch(filmUrl);
              const filmData = await filmResponse.json();
              return filmData.title;
            })
          );
          setCharacter({ ...data, films });
        } catch (error) {
          console.error('Error fetching character details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCharacter();
  }, []);

  return (
    <Container maxW="container.md" py={4}>
      {loading ? <Spinner size="xl" /> : <CharacterDetail character={character} />}
    </Container>
  );
};

export default CharacterPage;
