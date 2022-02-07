import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Counter from './Counter';
import BetterCounter from './BetterCounter';
import Hobby from './Hobby';
import Menu from './Assignment';
import Registration from './Registration';
import Hobbies from './Hobbies';
import Native from './Native';
import Login2 from './Login2';
import Counter2 from './Counter2';
function App() {
  return (
    /*<div className="App">
     <h1>Welcome To React</h1>
     <div className = "App-div">This the Home page of React</div>
    </div>*/
    <div>
    <div className='Menu'>
      <Menu></Menu>
    </div>
    <div className="Registration">
      <Registration></Registration>
    </div>
    <div className='Hobbies'>
      <Hobbies></Hobbies>
    </div>
    <div className='Native'>
    <Native></Native>
    </div>
    <div className='Loginform'>
      <Login2></Login2>
    </div>
    <div className='Counter2'><Counter2>
      </Counter2></div>
    <footer className='Footer'>Copyrights@2022</footer>
    </div>
  );
}

export default App;
