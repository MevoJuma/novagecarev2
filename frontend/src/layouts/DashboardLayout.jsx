export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 bg-white shadow">
        <h2 className="p-4 font-bold">Admin</h2>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-6">
        {children}
      </main>

    </div>
  );
}
