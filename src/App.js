import { useState } from 'react';
import './App.css';
import Search from './search';
import Videos from './videos';

function App() {
  const [search, setSearch] = useState(null);
  const videoSource = 'Youtube'; //Hardcoded but can be changed to another source based on user input

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Find a video
        </p>
        <Search setSearch={setSearch}/>
        <Videos search={search} source={videoSource}/>
      </header>
    </div>
  );
}

export default App;
