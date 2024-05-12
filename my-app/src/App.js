import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingwithprops from './components/FunctionalGreetingwithprops';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingwithprops />
    </div>
  );
}

export default App;
