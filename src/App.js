import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Main/Content';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            {/* component vs render, прокидываем props через Route */}
            <Route path='/content' element={<Content />} />
            <Route path='/news' element={<News />} />
          </Routes>

        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;


