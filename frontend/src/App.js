import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import ProductScreen from './pages/ProductScreen';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />      
          <Route path="/product/:id" element={<ProductScreen/>} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/cart/:id" element={<ShoppingCart/>} />      
          <Route path="/cart" element={<ShoppingCart/>} />      
          <Route path="/signup" element={<Signup/>} />     
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
