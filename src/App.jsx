import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContext from './Context/cartContext';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ConstructionPage from './Components/ConstructionPage';

function App() {

  const navigatorList = ['pokemon','pokedex','Contacto','tienda']

  return (
  <>
    <CartContext>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NavBar items={navigatorList}/>}>
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
                <Route path={`/${element}`} element={<ConstructionPage/>}></Route>
              )
            })
          }
          <Route path="/cart" element={<ConstructionPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContext>
  </>      
  );
}

export default App;


//<>