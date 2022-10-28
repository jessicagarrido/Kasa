import Header from './components/Header';
import Home from './scenes/Home';
import About from './scenes/About';
import GalleryAbout from './components/GalleryAbout';
import ErrorPage from './scenes/ErrorPage';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
     <div className='App'>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryAbout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     </div>
  );
}

export default App;