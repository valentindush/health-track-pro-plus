"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'x' as const,
    elements: {
        bar: {
            borderWidth: 2,
            width: "20px"
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Patients Data (Temperature and Heart Beat Rate)',
        },
    },
};

type propsType = {
    data: {
        labels: string[],
        datasets: {
            label: string,
            data: number[],
            borderColor: string,
            backgroundColor: string,
        }[]
    }
}

const Chart = ({data}: {data: propsType}) => {
    return(
        <Bar data={data.data} options={options} />
    )
}

export default Chart