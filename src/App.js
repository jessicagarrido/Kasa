import Header from './components/Header';
import Home from './scenes/Home';
import About from './components/About';
import Gallery from './scenes/Gallery';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
     <div className='App'>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
       <Footer />
     </div>
  );
}

export default App;