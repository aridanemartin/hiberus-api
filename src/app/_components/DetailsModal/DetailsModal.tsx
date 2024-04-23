import { Pokemon } from "@/app/_interfaces/pokemon/pokemon";
import styles from "./DetailsModal.module.css";
import Image from "next/image";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";
import Link from "next/link";
import dynamic from "next/dynamic";

interface DetailsModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const DetailsModal = ({ pokemon, onClose }: DetailsModalProps) => {
  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>
            {capitalizeFirstLetter(pokemon.name)}
          </h1>
          <button onClick={onClose}>Close</button>
        </div>
        <section className={styles.types}>
          <p>Types:</p>
          {pokemon.types.map((type) => (
            <Link
              key={type.type.name}
              href={`/pokemon-by-type/${type.type.name.toLowerCase()}`}
            >
              {capitalizeFirstLetter(type.type.name)}
            </Link>
          ))}
        </section>
        {pokemon.sprites.front_default && (
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={200}
            height={200}
          />
        )}
        {pokemon.stats.map((stat) => (
          <ProgressBar
            key={stat.stat.name}
            stat={stat.stat.name}
            value={stat.base_stat}
          />
        ))}
        <Link href={`/detail/${pokemon.name}`}>Go to detail</Link>
      </div>
    </section>
  );
};

export default DetailsModal;
