import Header from '../components/header/Header';
import Searcher from '../components/searcher/Searcher';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getSingleCharacter} from '../api/Api';
import { Button, Typography } from '@mui/material';

const CharacterPage = ({characters}) => {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
         async function fetchCharacter () {
                    try {
                        const data = await getSingleCharacter(id);
                        setCharacter(data);
                        setLoading(false);
                    } catch (error) {
                        setError(error);
                        setLoading(false);
                    }
                }

                fetchCharacter();
    }, [id]);

    console.log(character);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', gap: '3rem' }}>
            <Header />
            <Searcher characters={characters}/>
            {loading && <p>Загрузка...</p>}
            {!loading && !error && character && (
            <div className='characterInfo' style={{ display: 'flex', alignItems: 'center', gap: '3rem', outline: '1px solid grey', padding: '1rem', maxWidth: '30%'}}>
                <img src={character.image} alt={character.name} style={{ width: '300px', height: '300px' }} />
                <div className='characterText' style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 500 }}>
                        {character.name}
                    </Typography>
                    <Typography style={{ fontWeight: 500 }}>Species: {character.species}</Typography>
                    <Typography>Gender: {character.gender}</Typography>
                    <Typography>Status: {character.status}</Typography>
                    <Typography>Location: {character.location.name}</Typography>
                </div>
            </div>
            )}
            {error && <p>Ошибка: {error.message}</p>}
            <Button style={{width: '10%',backgroundColor: '#FFC107', fontWeight: 700, marginBottom: '5rem'}} variant="contained" onClick={() => window.location.href = '/' }>На главную</Button>
    </div>
  )
};

export default CharacterPage;