import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import Login from './Login';
import Register from './Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
