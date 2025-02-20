import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '../../data/userData.json';
import friends from '../../data/friends.json';

export default function App() {
  const user = userData[0];
  return (
    <>
      
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
      <FriendList friends={friends}/>
    </>
  ); 
}

