import React from 'react';
import './App.css';
import CardList from '../CardList/CardList';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <CardList></CardList>
            </header>
        </div>
    );
}

export default App;
