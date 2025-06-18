import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import { getCharacters } from './api/Api';
import CharacterPage from './pages/CharacterPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCharacters () {
            try {
                const data = await getCharacters();
                setCharacters(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchCharacters();
    }, []);

    if (loading) return (
      <HomePage characters={[]}/>
    );

    if (error) throw error;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage characters={characters}/>} />
        <Route path="/character/:id" element={<CharacterPage characters={characters}/>} />
      </Routes>
    </Router>
  );
}

export default App;
