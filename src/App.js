import About from './components/about/About';
import Header from './components/Header';
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
    </div>
  );
}

export default App;
