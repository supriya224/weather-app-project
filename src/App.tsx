import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Header from './components/shared/header/Header';

function App() {
  return (
    // added dark theme to the whole page
    <div className=" dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] ">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* home page imported here */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
