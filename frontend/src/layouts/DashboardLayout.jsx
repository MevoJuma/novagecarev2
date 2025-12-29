import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  HeartPulse,
  CalendarCheck,
  Settings,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 bg-white shadow">
        <h2 className="p-4 font-bold">Admin</h2>
        <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
          <li>
            <Link
            to="/admin/AdminDashboard"
            className={isActive("/admin/AdminDashboard") ? "active" : ""}
            >
            <LayoutDashboard size={30} />
            Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/admin/elders"
              className={isActive("/admin/elders") ? "active" : ""}
            >
            <HeartPulse size={30} />
            Elders
            </Link>
          </li>

          <li>
            <Link
              to="/admin/caregivers"
              className={isActive("/admin/caregivers") ? "active" : ""}
            >
              <Users size={30} />
              Caregivers
            </Link>
          </li>

          <li>
            <Link
              to="/admin/appointments"
              className={isActive("/admin/appointments") ? "active" : ""}
            >
              <CalendarCheck size={30} />
              Appointments
            </Link>
          </li>

          <li>
            <Link
              to="/admin/settings"
              className={isActive("/admin/settings") ? "active" : ""}
            >
              <Settings size={30} />
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-6">
        {children}
      </main>
    </div>
  );
}
