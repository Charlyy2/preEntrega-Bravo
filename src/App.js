
import './App.css';
import { NavBar } from './components/Item/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer greetomg={'Bienvenidos'}/>
    </div>
  );
}

export default App;
