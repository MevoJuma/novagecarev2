import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="menu p-4 gap-2">
      {user?.role === "admin" && (
        <>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/elders">Elders</Link></li>
            <li><Link to="/admin/caregivers">Caregivers</Link></li>
            <li><Link to="/admin/appointments">Appointments</Link></li>
            <li><Link to="/admin/requests">Requests</Link></li>
            <li><Link to="/admin/reports">Reports</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
        </>
      )}
        {user?.role === "caregiver" && (
        <>
            <li><Link to="/caregiver">Dashboard</Link></li>
            <li><Link to="/caregiver/elders">Assigned Elders</Link></li>
            <li><Link to="/caregiver/schedule">Schedule</Link></li>
        </>
      )}
        {user?.role === "elder" && (
        <>
            <li><Link to="/elder">Dashboard</Link></li>
            <li><Link to="/elder/appointments">Appointments</Link></li>
            <li><Link to="/elder/profile">Profile</Link></li>
        </>
      )}
    </ul>
  );
}
