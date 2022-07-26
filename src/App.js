import About from './components/about/About';
import Header from './components/Header';
import Menu from './components/menu/Menu';
import Top from './components/top/Top';

function App() {
  return (
    <div style={{position: 'relative'}}>
      <Header />
      <Top />
      <About />
      <Menu />
    </div>
  );
}

export default App;
