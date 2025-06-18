import styles from './Gallery.module.css'
import MediaCard from '../mediacard/MediaCard';

const Gallery = ({characters}) => {

    return (
        <div className={styles.gallery}>
            {characters.map((character) => (
                <MediaCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    species={character.species}
                    status={character.status}
                    location={character.location.name}
                    
                />
            ))}
            
        </div>
    )
};

export default Gallery;