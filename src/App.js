import logo from './logo.svg';
import './App.css';

function App() {
  
  var data = 'nav';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div className={data}>안녕하세요</div>
      </div>
    </div>
  );
}

export default App;
