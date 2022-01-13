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
import AdminProductList from './pages/AdminProductList';
import AdminCreateProduct from './pages/AdminCreateProduct';
import AdminOrdersList from './pages/AdminOrdersList';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import Category from './pages/Category';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
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
          <Route path="/category" element={<CategoryPage/>} />     
          <Route path="/order/:id" element={<PostOrder/>} />     
          <Route path="/admin" element={<AdminUserList/>} />      
          <Route path="/admin/productlist" element={<AdminProductList/>} />      
          <Route path="/admin/user/:id/edit" element={<AdminEditUser/>} />      
          <Route path="/admin/product/:id/edit" element={<AdminCreateProduct/>} />      
          <Route path="/admin/orderlist" element={<AdminOrdersList/>} />      
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
