import logo from './logo.svg';
import './App.css';

function App() {
  let pageTitle = "Welcome to react app";
  let another = "Another";
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <b> {pageTitle} </b>
        <p>
          For git session 01
          For git session
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
