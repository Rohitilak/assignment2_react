import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Main2 from './components/Main2';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Main2/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
