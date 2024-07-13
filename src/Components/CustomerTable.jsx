import React, { useEffect, useState } from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper, styled, tableCellClasses, Box, Grid, Tooltip, IconButton } from '@mui/material';
import TransactionTable from './TransactionTable';
import TransactionGraph from './TransactionGraph';
import { BarChartOutlined } from '@mui/icons-material'; 
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#1976d2',
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: '8px 16px',
      borderRight: `1px solid ${theme.palette.divider}`,
      textAlign: 'center'
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
  
   
    height: 45,
  }));
  
export default function CustomerTable({customers,transactions}) {
    const[selectedCustomer,setSelectedCustomer]=useState(null);
    useEffect(() => {
       
        const updatedSelectedCustomers = customers.map(customer => ({
          customerId: customer.id,
          transactions: transactions.filter(transaction => transaction.customer_id === customer.id)
        }));
    
        setSelectedCustomer(updatedSelectedCustomers);
      }, [customers, transactions]);
      
  return (
  
    <Box
    sx={{
      bgcolor: '#e3f2fd',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}
  >
    <TableContainer
      component={Paper}
      sx={{
        width: '80%',

        maxHeight: '100%',
        overflowY: 'auto', 
        mb: 2,

      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Customer ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Chart</StyledTableCell>

          </StyledTableRow>
        </TableHead>
        <TableBody>
          {selectedCustomer?.map((customerData) => (
            customerData.transactions.map((transaction, index) => (
              <StyledTableRow key={`${customerData.customerId}-${index}`} style={{ cursor: 'pointer' }}>
                {index === 0 && (
                  <>
                    <StyledTableCell rowSpan={customerData.transactions.length}>
                      {customerData.customerId}
                    </StyledTableCell>
                    <StyledTableCell rowSpan={customerData.transactions.length}>
                      {customers.find((customer) => customer.id === customerData.customerId)?.name}
                    </StyledTableCell>
                  </>
                )}
                <StyledTableCell>{transaction.date}</StyledTableCell>
                <StyledTableCell>{transaction.amount}</StyledTableCell>
                {index === 0 && (
                  <StyledTableCell rowSpan={customerData.transactions.length}>
                    <Tooltip title="View Chart">
                      <IconButton
                        component={Link}
                        to={`/chart/${customerData.customerId}`}
                        aria-label={`Chart for Customer ${customerData.customerId}`}
                        onClick={() => onChartIconClick(customerData.customerId)}
                      >
                        <BarChartOutlined />
                      </IconButton>
                    </Tooltip>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
 

  )
}
