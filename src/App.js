import './App.css';
import ProfileList from './components/profile-list/ProfileList';

function App({title}) {
  return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12 App'>
            <h2>{title}</h2>
            <p>This is my first React app that fetches and displays GitHub users</p>

            {/* <Search filter={Filter}/> */}
          </div>

          <ProfileList/>
        </div>
      </div>
  );
}

export default App;
