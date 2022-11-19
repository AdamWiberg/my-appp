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
            <Route path='Content' element={<Content />} />
            <Route path='News' element={<News />} />
            </Routes>

        </div> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;


