import Header from '../components/header/Header';
import Searcher from '../components/searcher/Searcher';
import Gallery from '../components/gallery/Gallery';
import { Button } from '@mui/material';
import { useState } from 'react';

const HomePage = ({characters}) => {
 const [visibleCount, setVisibleCount] = useState(3);

 const showMoreCards = () => {
  setVisibleCount((prevCount) => prevCount + 3);
 }

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', gap: '3rem'}}>
      <Header/>
      <Searcher characters={characters}/>
      <Gallery characters={characters.slice(0, visibleCount)}/>
      <Button style={{width: '10%',backgroundColor: '#FFC107', fontWeight: 700, marginBottom: '5rem'}} variant="contained" onClick={showMoreCards}>Показать еще</Button>
    </div>
  )
};

export default HomePage;