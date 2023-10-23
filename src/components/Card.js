import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/Card.module.css"


export default function Card({ pokemon }) {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  return (
    <div className={styles.card}>
      <Image
        src={imageURL}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}className={styles.btn}>Detalhes</Link>
      
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const pokemon = response.data;

    return {
      props: {
        pokemon,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar dados do Pokémon:", error);
    return {
      props: {
        pokemon: null,
      },
    };
  }
}
