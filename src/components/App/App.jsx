import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import Transactions from '../TransactionHistory/TransactionHistory';
import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </>
  ); 
}

