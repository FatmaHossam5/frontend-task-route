import axios from 'axios';
import { useEffect, useState } from 'react';
import Filter from './Components/Filter';
import CustomerTable from './Components/CustomerTable';
import { Box, Paper } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ChartPage from './Components/ChartPage';

const App = () => {
  const [data, setData] = useState({ customers: [], transactions: [] });
  const [filteredCustomers, setFilterCustomers] = useState([]);
  const [filter, setFilter] = useState({ name: "", amount: "" });

  useEffect(() => {
    axios.get('http://localhost:5001/api/data/').then(response => {
      setData(response.data);
      setFilterCustomers(response.data.customers);
    });
  }, []);

  useEffect(() => {
    let filtered = data.customers.filter(customer =>
      customer.name.toLowerCase().includes(filter.name.toLowerCase()));
    if (filter.amount) {
      filtered = filtered.filter(customer =>
        data.transactions.some(
          transaction => 
            transaction.customer_id === customer.id && transaction.amount >= filter.amount));
    }
    setFilterCustomers(filtered);
  }, [filter, data]);

  return (
    <Router  basename='/frontend-task-route/'>
      <AppContent data={data} filteredCustomers={filteredCustomers} setFilter={setFilter} />
    </Router>
  );
};

const AppContent = ({ data, filteredCustomers, setFilter }) => {
  const location = useLocation();

  return (
    <Box sx={{ bgcolor: '#e3f2fd', width: '100vw', height: '100vh', display: 'flex',
    flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
      {location.pathname === '/' && (
        <Paper sx={{ width: '80%', maxWidth: 800, p: 1, mt: 2, mb: 2, textAlign: "center" }}>
          <Filter setFilter={setFilter} />
        </Paper>
      )}

      <Routes>
        <Route
          exact
          path="/"
          element={<CustomerTable customers={filteredCustomers} transactions={data.transactions} />}
        />
        <Route
          path="/chart/:customerId"
          element={<ChartPage transactions={data.transactions} customers={data.customers} />}
        />
      </Routes>
    </Box>
  );
};

export default App;
