import "./App.css";
import ToggleGenre from "./components/Togglegenre/Togglegenre";
import Footer from "./components/footter/footer.component";
import ErrorBoundary from "./components/ErrorBound/ErrorBoundary.component";
import Header from "./components/Header/Header.component";
import MovieContainer from "./components/MovieContainer/MovieContainer.component";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <ToggleGenre />
      </ErrorBoundary>
      <tr className="bord" />
      <MovieContainer />
      <Footer>netflixroulette</Footer>
    </div>
  );
}
export default App;
