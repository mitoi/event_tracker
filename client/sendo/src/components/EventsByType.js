import { Bar } from 'react-chartjs-2';
import {
    CategoryScale, LinearScale, Chart, BarElement, Title,
    Tooltip,
    Legend,
} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

//import faker from '@faker-js/faker';

//  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data2 = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
const EventsByType = ({ data }) => {
    const options = {
        scales: {
            x: {
                type: 'category'
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Events Count by type',
            },
        },
    };

    return <Bar options={options} data={data} />;
}

export default EventsByType;
