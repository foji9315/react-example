import './App.css';
import Characters from './components/Characters';
import Home from './components/Home';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import CharacterDetails from './components/CharacterDetials';

function App() {
    document.title = "SPA example";
    const [characters, setCharacters] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home characters={characters} setCharacters={setCharacters} />} />
                <Route path='/characters' element={<Characters characters={characters} />} />
                <Route path='/characters/:id' element={<CharacterDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
