import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BattersTable from './components/BattersTable';

function App() {
    const [activeTab, setActiveTab] = useState('batters');
    const [players, setPlayers] = useState([]);
    const API_URL = "/baseball/hitter";
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [API_URL]);
    return (
        <div className="App">
            <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
            <main>
                <BattersTable players={players}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;