import { Pokemon } from "@/app/_interfaces/pokemon/pokemon";
import styles from "./DetailsModal.module.css";
import Image from "next/image";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { capitalizeFirstLetter } from "@/app/_helpers/CapitalizeFirstLetter";
import Link from "next/link";
import closeButtonImage from "@/app/_assets/icons/close.png";

interface DetailsModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

const DetailsModal = ({ pokemon, onClose }: DetailsModalProps) => {
  return (
    <>
      <section className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h1 className={styles.title}>
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
            <button className={styles.closeButton} onClick={onClose}>
              <Image
                src={closeButtonImage}
                alt="Close"
                width={20}
                height={20}
              />
            </button>
          </div>
          <section className={styles.typesContainer}>
            <div className={styles.typesLinks}>
              <p>Types:</p>
              {pokemon.types.map((type) => (
                <Link
                  className={styles.typeLink}
                  key={type.type.name}
                  href={`/pokemon-by-type/${type.type.name.toLowerCase()}`}
                >
                  {capitalizeFirstLetter(type.type.name)}
                </Link>
              ))}
            </div>
            <Link
              className={styles.linkButton}
              href={`/detail/${pokemon.name}`}
            >
              Go to detail
            </Link>
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
        </div>
      </section>
      <div className={styles.modalBackdrop}></div>
    </>
  );
};

export default DetailsModal;
