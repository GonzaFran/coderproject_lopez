
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ConstructionPage from './Components/ConstructionPage';

function App() {

  const navigatorList = ['pokemon','pokedex','Contacto','tienda']

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NavBar items={navigatorList} action={()=>{console.log('This works')}}/>}>
        </Route>
      </Routes> 
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/pokemon/" element={<ItemListContainer/>}></Route>
        <Route path="/pokemon/:name" element={<ItemDetailContainer/>}></Route>
        {
                navigatorList.filter((element) => 
                element !== "pokemon")
                .map((element) => {
                return (
                <Route path={`/:${element}`} element={<ConstructionPage/>}></Route>
              )
            })
          }
      </Routes>
      
    </BrowserRouter>
    
    {/* <ItemDetailContainer/> */}
    </>
  );
}

export default App;


//<>