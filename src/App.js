import About from './components/about/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Locations from './components/locations/Locations';
import Menu from './components/menu/Menu';
import Shop from './components/shop/Shop';
import Top from './components/top/Top';

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Header />
      <Top />
      <About />
      <Menu />
      <Shop />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
