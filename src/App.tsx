import React from 'react';
import './App.css';

function App() {
    const names = ['Kolya', 'Tolya', 'Sanya', 'Vanya']

    const users = [{name: 'Kolya'}, {name:'Tolya'}, {name:'Sanya'}, {name:'Vanya'}]

    const liElements = users.map((u, index) => <li key={index}>{u.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
