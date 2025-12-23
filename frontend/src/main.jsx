// // src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import App from './App';
// import Login from './pages/Login';
// import Unauthorized from './pages/Unauthorized';

// import AdminDashboard from './pages/admin/AdminDashboard';
// import CaregiverDashboard from './pages/caregiver/CaregiverDashboard';
// import ElderDashboard from './pages/elder/ElderDashboard';

// import ProtectedRoute from './components/ProtectedRoute';
// import { AuthProvider } from './context/AuthContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
          
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />

//           {/* Protected Routes */}
//           {/* Admin Routes */}
//           <Route
//             path="/admin/AdminDashboard"
//             element={
//               <ProtectedRoute allowedRoles={['admin']}>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Caregiver Routes */}
//           <Route
//             path="/caregiver/CaregiverDashboard"
//             element={
//               <ProtectedRoute allowedRoles={['caregiver']}>
//                 <CaregiverDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Elder Routes */}
//           <Route
//             path="/elder/ElderDashboard"
//             element={
//               <ProtectedRoute allowedRoles={['elder']}>
//                 <ElderDashboard />
//               </ProtectedRoute>
//             }
//           />
        
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   </React.StrictMode>
// );


// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';

//import './styles.css'; // add your styles
import './index.css';


function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home — <a href="/login">Login</a></div>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/AdminDashboard" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

createRoot(document.getElementById('root')).render(<AppRoutes />);
