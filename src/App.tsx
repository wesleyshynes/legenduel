import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.scss';
import MainMenu from './components/MainMenu/MainMenu';
import LoginScreen from './screens/LoginScreen';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
  });

  const [userList, setUserList] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUserList(data.users);
      })
  }, []);

  if (!loggedIn) {
    return (
      <div className="App">
        <LoginScreen setLoggedIn={(userInfo: { username: string }) => {
          setUserInfo(userInfo);
          setLoggedIn(true);
        }} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="legendu-container">
        <h1>Welcome to Legendu, {userInfo.username}</h1>

        <MainMenu />

        {/* todo: add routes */}


        <h2>Users Online</h2>
        {userList.length > 0 && userList.map((user, index) => (
          <div key={index}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <Link to={`/profile/${user.name}`}>View</Link>
          </div>
        ))}

        <hr />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
