
import './App.css';
import { ToastContainer } from "react-toastify";
import { Header } from "./components/layout/Header";
import { Footer } from './components/layout/Footer';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home/Home'
import { SignIn } from './pages/signIn-signUp/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signIn' element={ <SignIn />} />
      </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
