import { Pokemon } from "@/app/_interfaces/pokemon/pokemon";
import styles from "./DetailsModal.module.css";
import Image from "next/image";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";

interface DetailsModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const DetailsModal = ({ pokemon, onClose }: DetailsModalProps) => {
  return (
    <section className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
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
        <button onClick={onClose}>Close</button>
      </div>
    </section>
  );
};

export default DetailsModal;
