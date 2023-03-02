import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content store={ props.store } />
      <Footer />      
    </div>
  );
}

export default App;
