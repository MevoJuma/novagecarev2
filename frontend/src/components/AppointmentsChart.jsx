import {
  LineChart, 
  Line, 
  XAxis, 
  YAxis,
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";

const data = [
    { day: "Mon", appointments: 10 },
    { day: "Tue", appointments: 14 },
    { day: "Wed", appointments: 8 },
    { day: "Thu", appointments: 16 },
    { day: "Fri", appointments: 12 },
    { day: "Sat", appointments: 18 },
    { day: "Sun", appointments: 20 }
];

export default function AppointmentsChart() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">
            Weekly Appointments
        </h3>

        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="appointments" 
                      stroke="#4F46E5"
                      strokeWidth={3}
                      />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
