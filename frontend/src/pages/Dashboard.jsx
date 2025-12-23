// src/pages/Dashboard.jsx
 import React, { useContext } from 'react';
 import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);
   return (
     <div>
       <h1>Dashboard</h1>
       <pre>{JSON.stringify(user, null, 2)}</pre>
       <button onClick={() => { logoutUser(); }}>Logout</button>
     </div>
   );
 }

