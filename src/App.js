import { useEffect } from 'react';
import './Assets/Variable.css'
import { useTranslation } from 'react-i18next';
import './App.css';
import Test from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

// import i18n from './i18';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (i18n.language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl'); // Set RTL for Arabic
    } else {
      htmlElement.setAttribute('dir', 'ltr'); // Set LTR for other languages
    }
  }, [i18n.language]);
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/user" element={<Home />} />
         
        </Routes>
      </Router>
        
        {/* <Test/>n */}
      </header>
    </div>
  );
}

export default App;
