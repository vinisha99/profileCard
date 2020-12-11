import './App.css';
import dp from './images/vini.jpg';
import bg_top from './images/bg-pattern-top.svg';
import bg_bottom from './images/bg-pattern-bottom.svg';
import bg_pattern from './images/bg-pattern-card.svg';

function App() {
  return (
    <div className="App">
      <div class="card">
        <img class="top" src={bg_top} alt=""></img>
        <img class="bottom" src={bg_bottom} alt=""></img>
      </div>
      <div class="centre-card">
        <img class="pattern" src={bg_pattern} alt=""></img>
        <img class="dp" src={dp} alt=""></img>
        <h1>Vinisha N <span>26</span></h1>
        <h2>London</h2>
        <ul>
          <li>
            <h3>80K</h3>
            <h4>Followers</h4>
          </li>
          <li>
            <h3>803K</h3>
            <h4>Likes</h4>
          </li>
          <li>
            <h3>1.4K</h3>
            <h4>Photos</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
