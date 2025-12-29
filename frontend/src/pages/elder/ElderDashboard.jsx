import DashboardLayout from "../../layouts/DashboardLayout";

export default function ElderDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            My Health Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Next Appointment" value="Tomorrow" />
          <StatCard title="Assigned Caregiver" value="John" />
          <StatCard title="Health Status" value="Stable" />
        </div>

        {/* Health Tips */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-4">Health Tip</h3>
          <p className="text-gray-600">
            Drink enough water and take short walks daily.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-semibold">{value}</h2>
    </div>
  );
}
