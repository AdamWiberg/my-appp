import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Content from './main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './Dialogs';

const App = () => { 
  return (
    <BrowserRouter>
   
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
        <Routes>
            <Route path='Content' element={<Content />} />
            <Route path='Dialogs' element={<Dialogs />} />
            </Routes>

        </div> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;
