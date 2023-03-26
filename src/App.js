import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber/Navber';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="bg-red-100">
      <Navber></Navber>
      <Shop></Shop>
    </div>
  );
}

export default App;
