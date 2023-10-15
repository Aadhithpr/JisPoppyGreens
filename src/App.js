import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Links from './components/Links/Links';
import Products from './components/Products/Products';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Products/>
      <Footer/>
      <Links/>
    </div>
  );
}
export default App;
