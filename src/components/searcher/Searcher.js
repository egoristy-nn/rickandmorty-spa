import styles from './Searcher.module.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Searcher = ({characters}) => {

  const handleSelectChange = (event, value) => {
    if (value !== null) {
      const selectedCharacter = characters.find((ch) => ch.name === value);
      if (selectedCharacter) {
        window.location.href = `/character/${selectedCharacter.id}`
      }
    }
  };

  return (
    <div className={styles.searcher}>
        <Autocomplete
          disablePortal
          options={characters.map((character) => character.name)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Персонаж" />}
          onChange={handleSelectChange}
/>
    </div>
  )
};

export default Searcher;