import Layout from 'src/Components/Layout';
import styles from '../../../../../../Components/body/pokemonDetails/pokemonDetails.module.scss';
import { AppContent } from 'src/Components/App/appLayout';
import { use } from 'react';
import { PokemonDetailsInfo } from 'src/Components/body/pokemonDetails/pokemonDetailsInfo';

async function fetchSearchResults() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function fetchDetailsResults(namePokemon: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

interface Params {
  params: {
    number: number;
    name: string;
  };
}

export default function PageDetails({ params }: Params) {
  const { name, number } = params;
  const allPokemons = use(fetchSearchResults());
  const resultDetailsData = use(fetchDetailsResults(name));

  return (
    <div className={styles['pokemon-details']}>
      <Layout
        secondaryChildren={
          <PokemonDetailsInfo data={resultDetailsData} currentPage={number} />
        }
        mainChildren={
          <AppContent allPokemons={allPokemons.results} currentPage={number} />
        }
      />
    </div>
  );
}