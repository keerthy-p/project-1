import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/layout/Home';
import '../src/assets/css/style.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
