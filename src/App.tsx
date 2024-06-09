import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Header from './components/shared/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
