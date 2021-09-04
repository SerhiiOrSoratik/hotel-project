import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findFreeRooms } from './action/action';
import './App.css';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';

const App = () => {


  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
