import React from 'react';
import { Box, Button, TextField } from '@mui/material';

export default function Filter({setFilter}) {
    const handleFilterChange=(e)=>{
        const{name,value}=e.target;
        setFilter(prev=>({...prev,[name]:value}))
    }

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
<TextField name='name'
label='Filter by Customer Name'
variant="outlined"
size="small"
fullWidth
sx={{ bgcolor: '#d9e3f0', borderRadius: 1 }}

onChange={handleFilterChange}
/>

    </Box>



   
  )
}
