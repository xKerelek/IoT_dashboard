import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import DeviceStatusCard from "./components/DeviceStatusCard.tsx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '2024-06-01', temperature: 23.5, pressure: 1013.25, humidity: 45 },
    { name: '2024-06-02', temperature: 24.0, pressure: 1012.25, humidity: 46 },
    { name: '2024-06-03', temperature: 23.8, pressure: 1011.25, humidity: 44 },
];
const devices = Array.from({ length: 17 }, (_, i) => ({
    deviceName: `Device No. ${i}`,
    temperature: i % 3 === 0 ? 23 + i * 0.1 : null,
    pressure: i % 3 === 0 ? 1013 - i * 0.1 : null,
    humidity: i % 3 === 0 ? 45 - i * 0.1 : null,
}));

function App() {
    const [visibleDevices, setVisibleDevices] = useState(5); // Initialize with 5 visible devices

    return (
        <>
            <Navbar />
            <h1>Technologie Webowe w aplikacjach internetu rzeczy</h1>

            <div className="dashboard-container">
                <DeviceStatusCard
                    deviceName="Device No. 3"
                    temperature={23.5}
                    pressure={1013.25}
                    humidity={45}
                />

                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="humidity" stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="divider"></div>

            <div className="devices-container">
                {devices.slice(0, visibleDevices).map((device, index) => (
                    <DeviceStatusCard
                        key={index}
                        deviceName={device.deviceName}
                        temperature={device.temperature}
                        pressure={device.pressure}
                        humidity={device.humidity}
                    />
                ))}
            </div>

            {}
            <div className="controls">
                <button onClick={() => setVisibleDevices(visibleDevices + 1)} disabled={visibleDevices >= devices.length}>Show More</button>
                <button onClick={() => setVisibleDevices(visibleDevices - 1)} disabled={visibleDevices === 0}>Show Less</button>
            </div>
        </>
    );
}

export default App;
