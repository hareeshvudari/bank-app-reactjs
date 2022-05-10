import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../sidebar'
import  './index.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function Fundtransfer() {
    const [accountType, setAccountType] = React.useState('');

    const handleChange = (event) => {
        setAccountType(event.target.value);
    };
    return (
        <>
            <Sidebar />
            <Box className='main-screens' sx={{ bgcolor: '#E6E8EA', color: '#000', p: 2 }}>
                <h3>Fund Transfer</h3>
            </Box>
           
            <Box className='sub-main-screens' mt={3}>
            <h4 className='mb-5'>Your Account Details:</h4>
            <h6>Account Number : <spa>383164471229</spa></h6>
            <h6>Balance : <span>$ 5678/-</span></h6>
            <h6>Account Type : <span>Saving</span></h6>
            </Box>
            <Box className='sub-main-screens' mt={3}>
            <h4 className='mb-5'>Transfer To :</h4>
       
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }}  className='text-field' size='small' label="Enter Account Number" /><br></br>
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }}  className='text-field' size='small' label="Enter Confirm Account Number" /><br></br>
          <Box className='mb-5'>
      <FormControl>
        <InputLabel id="demo-simple-select-label"className='account-type'>Account Type</InputLabel>
        <Select  
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accountType}
          label="Account Type"
          onChange={handleChange}
        >
          <MenuItem value={'saving'}>Saving</MenuItem>
          <MenuItem value={'Current'}>Current</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }}  className='text-field mb-5' size='small' label="Enter Amount" /><br></br>
    <Button  className='filled-primary' variant="contained" >
            Transfer
          </Button>
          <br></br>
          <Stack sx={{ width: '40%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">Transaction failed </Alert>
      <Alert severity="success">Transaction Successfully.</Alert>
    </Stack>
    
            </Box>
            
        </>
    );
}

export default Fundtransfer;
