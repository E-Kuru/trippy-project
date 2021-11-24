import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage';
import Hotels from './pages/Hotels';
import Hotel from './pages/Hotel'
import NotFound from './components/NotFound'
import Favoris from './components/Favoris'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>  
          <Route path='/hotels/:city' element={<Hotels/>}/>  
          <Route path='/hotel/:id' element={<Hotel/>}/>  
          <Route path='/hotel/' element={<Favoris/>}/>
          <Route path='*' element={<NotFound/>}/>  
        </Routes>      
      </BrowserRouter>
  );
};

export default App;