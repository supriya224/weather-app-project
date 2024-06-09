import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Header from './components/shared/header/Header';

function App() {
  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg"
        alt=""
        className=" absolute object-fill"
      />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
