import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
