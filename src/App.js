import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Main/main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';

const App = () => { 
  return (
    <BrowserRouter>
   
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
        <Routes>
        {/* component vs render, прокидываем props через Route */}
            <Route path='Content' render= { () => <Content />} />
            <Route path='News' render= { () => <News />} />
            </Routes>

        </div> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;


