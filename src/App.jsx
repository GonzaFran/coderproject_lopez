
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {

  const navigatorList = ['inicio','pokedex','inventario','tienda']

  return (
    <>
    <NavBar items={navigatorList} action={()=>{console.log('This works')}}/>
    <ItemListContainer/>
    </>
  );
}

export default App;


//<>