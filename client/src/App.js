import './App.css';
import './components/Nav'
import SearchBar from './components/SearchBar'
import MovieResults from './components/MovieResults'
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <SearchBar/>
      <MovieResults/>
    </div>
  );
}

export default App;
