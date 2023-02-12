import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import Card from './components/Card';


function App() {
  return (
    <div>
     <Navbar />
     <Card />
     <HomeScreen />
    </div>
  );
}

export default App;
