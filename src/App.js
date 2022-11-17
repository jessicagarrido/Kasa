import Header from './components/Header';
import Home from './pages/Home';
import GalleryAbout from './pages/PageAbout';
import PageGalleryAbout from './pages/PageGalleryAbout';
import ErrorPage from './pages/ErrorPage';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
     <div className='App'>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<GalleryAbout />} />
        <Route path="/pageGalleryAbout/:id" element={<PageGalleryAbout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
     </div>
  );
}

export default App;