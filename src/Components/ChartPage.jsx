import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import TransactionGraph from './TransactionGraph';

const ChartPage = ({ transactions, customers }) => {
  const { customerId } = useParams();
  
  const customer = customers.find(cust => cust.id === Number(customerId));
  const customerName = customer ? customer.name : 'Unknown Customer';

  const filteredTransactions = transactions.filter(transaction =>
    transaction.customer_id === Number(customerId)
  );

  console.log(filteredTransactions);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', 
    alignItems: 'center', height: '100vh', width: '100%', padding: 2, overflow: 'auto' }}>
      <TransactionGraph transactions={filteredTransactions} customerName={customerName} />
    </Box>
  );
}

export default ChartPage;
