
import './App.css';
import { ToastContainer } from "react-toastify";
import { Header } from "./components/layout/Header";
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Hello</p>
      <Footer/>
     <ToastContainer />
    </div>
  );
}

export default App;
