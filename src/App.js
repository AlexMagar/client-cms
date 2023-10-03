
import './App.css';
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home/Home'
import 'react-toastify/dist/ReactToastify.css';
import { SignIn } from './pages/signIn-signUp/SignIn';
import { Product } from './pages/product/Product';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getProductAction } from './pages/product/productAction';
import { NewAccount } from './pages/signIn-signUp/NewAccount';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductAction())
  },[dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={ <SignIn />} />
        <Route path='/newAccount' element={ <NewAccount/>} />
        <Route path='/product' element={ <Product />} />
      </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
