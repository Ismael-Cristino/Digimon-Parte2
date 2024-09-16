import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowDigimons from './components/ShowDigimons.jsx';
import CreateDigimon from './components/CreateDigimon.jsx';
import EditDigimon from './components/EditDigimon.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowDigimons/>} />
          <Route path='/create' element={ <CreateDigimon/>} />
          <Route path='/edit/:id' element={ <EditDigimon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;