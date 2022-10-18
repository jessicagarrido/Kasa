import Header from './components/Header';
import Home from './scenes/Home';
import Gallery from './scenes/Gallery';
import Footer from './components/Footer'

function App() {
  return (
    <router>
      <Header />
      <Home />
      <Gallery />
      <Footer />
    </router>
  );
}

export default App;
