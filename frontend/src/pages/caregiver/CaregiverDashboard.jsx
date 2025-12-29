import DashboardLayout from "../../layouts/DashboardLayout"


export default function CaregiverDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Caregiver Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Your daily care overview
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Assigned Elders" value="12" />
          <StatCard title="Appointments Today" value="8" />
          <StatCard title="Pending Tasks" value="5" />
        </div>

        {/* Task List */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Today's Tasks</h3>
          <ul className="space-y-2">
            <li>🩺 Visit Elder John</li>
            <li>💊 Medication follow-up</li>
            <li>📋 Update health report</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}

