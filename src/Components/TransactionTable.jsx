import React from 'react'
import { Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material'
export default function TransactionTable({transactions}) {
  return (
    <Table>
        <TableHead>
            <TableRow>
                
            <TableCell>
                Date
            </TableCell>
            <TableCell>
                Amount
            </TableCell>
            </TableRow>
        </TableHead>

<TableBody>
    {transactions.map(transaction=>(
        <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
        </TableRow>
    ))}
</TableBody>

    </Table>
  )
}
