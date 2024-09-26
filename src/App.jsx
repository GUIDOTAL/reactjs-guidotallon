import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import CategoryView from './views/CategoryView/CategoryView';
import ItemView from './views/ItemView/ItemView';
import Navbar from './componentes/Navbar';
import CardWidget from './componentes/CardWidget';
import LogoPagina from './componentes/LogoPagina';
import './App.css'


function App() {

  return (
    <>

      <BrowserRouter>
      <div>
        <LogoPagina/> 
        <Navbar />
        <CardWidget/>
      </div>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/category/:id" element={<CategoryView />} />
          <Route exact path="/category/remeras" element={<CategoryView />} />
          <Route exact path="/category/pantalones" element={<CategoryView />} />
          <Route exact path="/category/camperas" element={<CategoryView />} />
          <Route exact path="/item/:id" element={<ItemView />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
