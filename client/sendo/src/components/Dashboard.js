import { useEffect, useState } from 'react';
import EventsByType from './EventsByType';
const Dashboard = () => {

    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/events/chart/eventsByType');
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Events Dashboard</h1>
            {chartData ? (
                <EventsByType data={chartData} />
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default Dashboard;