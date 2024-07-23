import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fileupload from './components/Fileupload';
import Start from './components/Start';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/upload' element={<Fileupload />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
