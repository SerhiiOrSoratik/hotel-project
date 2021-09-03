import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findFreeRooms } from './action/action';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';

const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findFreeRooms);
  }, [dispatch])
  
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
