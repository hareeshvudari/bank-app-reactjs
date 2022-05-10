import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../sidebar'

function Dashboards() {
    return (
        <>
            <Sidebar />
            <Box className='main-screens' sx={{ bgcolor: '#E6E8EA', color: '#000', p: 2 }}>
                <h3>Account Overview</h3>
            </Box>
           
            <Box className='sub-main-screens' mt={3}>
            <h4>Your Account Balance:</h4>
            <h6>$ 5678/-</h6>
            </Box>
            
        </>
    );
}

export default Dashboards;
