
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo'
import Editar from './components/Editar'

import {BrowserRouter,  Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/nuevo' element={<Nuevo/>}/>
          <Route path='/editar/:id' element={<Editar/>}/>

        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
