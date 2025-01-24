import Navbar from './Navbar';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Hero from './pages/Hero';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
