import './App.css';
import Hello from './components/Helloworld';
import IncDecBtn from './components/incrementDecrement';
function App() {
  return (
    <div className="App">
      <IncDecBtn/>
      <Hello/>
    </div>
  );
}

export default App;
