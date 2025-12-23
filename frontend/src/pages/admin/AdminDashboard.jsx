import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getAdminStats } from "../../services/adminDashboard";
import AppointmentsChart from "../../components/AppointmentsChart";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Fetch admin stats from the backend
    getAdminStats()
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Error fetching admin stats:", error);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Today's Money"
            value="$53,000"
            change="+55%"
            positive
          />

          <StatCard
            title="Today's Users"
            value="2,300"
            change="+3%"
            positive
          />

          <StatCard
            title="New Clients"
            value="+3,462"
            change="-2%"
          />

          <StatCard
            title="Sales"
            value="$103,430"
            change="+5%"
            positive
          />

          {/* <StatCard
            title="Total Elders"
            value={stats?.total_elders || "..."}
            change="Live"
          />

          <StatCard
            title="Active Caregivers"
            value={stats?.total_caregivers || "..."}
            change="Live"
          />

          <StatCard
            title="Appointments Today"
            value={stats?.appointments_today || "..."}
            change="Today"
          />

          <StatCard
            title="Pending Requests"
            value={stats?.pending_requests || "..."}
            change="Needs action"
          /> */}
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-5 border-b">
            <h3 className="font-semibold text-gray-800">Recent Activities</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Registered</td>
                  <td>2024-06-15</td>
                  <td><span className="badge badge-success">Completed</span></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Booked Appointment</td>
                  <td>2024-06-14</td>
                  <td><span className="badge badge-warning">Pending</span></td>
                </tr>
                <tr>
                  <td>Mike Johnson</td>
                  <td>Submitted Report</td>
                  <td>2024-06-13</td>
                  <td><span className="badge badge-info">In Review</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Appointments Chart */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AppointmentsChart />

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">
              User Growth
            </h3>
            <p className="text-gray-800 text-sm">
              (Coming next - Bar Chart)
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* ===========================
   Reusable Stat Card Component
   =========================== */
function StatCard({ title, value, change, positive=false }) {
  return (
    <div className="card bg-white shadow-sm">
      <div className="card-body p-5">

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
          </div>

          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg">
            $
          </div>
        </div>

        <p
          className={`text-sm mt-2 ${
            positive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </p>

      </div>
    </div>
  );
}
