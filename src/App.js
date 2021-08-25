import logo from './logo.svg';
import './App.css';
import AppHeadline from './components/AppHeadline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppHeadline />
       
      </header>
    </div>
  );
}

export default App;
