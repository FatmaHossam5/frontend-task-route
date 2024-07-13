import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TransactionGraph = ({ transactions, customerName }) => {
  const data = {
    labels: transactions.map(transaction => transaction.date),
    datasets: [
      {
        label: 'Total Transaction Amount',
        data: transactions.map(transaction => transaction.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: '#3f51b5'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
          color: '#3f51b5'
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Transaction Bar Chart for ${customerName}`,
        color: '#3f51b5',
        font: {
          size: 20
        }
      },
    },
  };

  return (
    <Card sx={{ width: '80%', maxWidth: 800, margin: 'auto', mt: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: '#3f51b5' }}>
          Transaction Bar Chart for {customerName}
        </Typography>
        <Box sx={{ height: '400px', position: 'relative' }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TransactionGraph;
