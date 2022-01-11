import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import ProductScreen from './pages/ProductScreen';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import PostOrder from './pages/PostOrder';
import Profile from './pages/Profile';
import AdminUserList from './pages/AdminUserList';
import AdminEditUser from './pages/AdminEditUser';

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
          <Route path="/shipping" element={<Shipping/>} />     
          <Route path="/payment" element={<Payment/>} />     
          <Route path="/placeorder" element={<PlaceOrder/>} />     
          <Route path="/profile" element={<Profile/>} />     
          <Route path="/order/:id" element={<PostOrder/>} />     
          <Route path="/admin" element={<AdminUserList/>} />      
          <Route path="/admin/user/:id/edit" element={<AdminEditUser/>} />      
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
