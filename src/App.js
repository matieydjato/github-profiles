import './App.css';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';

function App({title}) {
  return (
      <div className="App-header">
        <h2>{title}</h2>
        <Search/>
        <Profile/>
      </div>
  );
}

export default App;
