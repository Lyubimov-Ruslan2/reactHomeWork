import './App.css';
import Hello from './components/Hello/Helloworld'
import IncDecBtn from './components/Buttons/incrementDecrement';
import SearchBar from './components/SearchBar/searchBar';
import ToggleGenre from './components/Togglegenre/Togglegenre';
function App() {
  return (
    <div className="App">
       {Hello}
      <IncDecBtn />
      <SearchBar/>
      <ToggleGenre/>
     
    </div>
  );
}
export default App;