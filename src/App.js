import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPg from './components/layout/MainPg';
import HomePg from './components/pages/HomePg';
import AboutPg from './components/pages/AboutPg';
import ContactPg from './components/pages/ContactPg';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainPg />
      <Routes>
        <Route path="/" index element={<HomePg/>} />
        <Route path="aboutPg" element={<AboutPg/>} />
        <Route path="contactPg" element={<ContactPg/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
