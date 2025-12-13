import DashboardLayout from "../../layouts/DashboardLayout";

export default function AdminDashboard() {
  return (
      <>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Example Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Total Elders</div>
          <div className="stat-value">128</div>
          <div className="stat-desc">+12 this week</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Active Caregivers</div>
          <div className="stat-value">45</div>
          <div className="stat-desc">+5 today</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Appointments</div>
          <div className="stat-value">23</div>
          <div className="stat-desc">2 pending</div>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-3">Recent Activity</h2>

        <div className="bg-base-100 p-4 rounded shadow">
          <p>Elder Mary James assigned to Caregiver John.</p>
          <p>Elder registration submitted by caregiver David.</p>
          <p>System alert: Appointment No. 34 is overdue.</p>
        </div>
      </div>

      </>
  );
}
