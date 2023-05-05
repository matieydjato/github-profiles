import './App.css';
import Search from './components/search/Search';
import ProfileList from './components/profile-list/ProfileList';
import { useEffect, useState } from 'react';

function App({title}) {
  const [profilesList, setProfilesList] = useState([]);
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://api.github.com/users');
    const data = await resp.json();
    setProfilesList(data);
    setRecords(data);
  };

  const Filter = (event) => {
    setProfilesList(records.filter(f => f.login.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12 App'>
            <h2>{title}</h2>
            <p>This is my first React app that fetches and displays GitHub users</p>

            <Search filter={Filter}/>
          </div>

          <ProfileList profilesList={profilesList}/>
        </div>
      </div>
  );
}

export default App;
