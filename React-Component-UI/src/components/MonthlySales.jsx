import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MonthlySales() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "This year",
                backgroundColor: "#4e73df",
                borderColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                hoverBorderColor: "#2e59d9",
                data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                barPercentage: 0.75,
                categoryPercentage: 0.5,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    stepSize: 20,
                },
            },
            x: {
                grid: {
                    color: "transparent",
                },
            },
        },
    };

    return (
        <div style={{ height: "400px" }}>
            <Bar data={data} options={options} />
        </div>
    );
};
