import React from 'react';
import Box from '@mui/material/Box';
import Sidebar from '../sidebar'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';
import "react-datepicker/dist/react-datepicker.css";
import BasicTable from './statement-table';

const statement_period = [
    {
      value: 'last_week',
      label: 'Last Week',
    },
    {
      value: 'two_weeks',
      label: 'Two Weeks',
    },
    {
      value: 'month',
      label: 'Month',
    },
    {
      value: 'custom',
      label: 'Custom',
    },
  ];

function Statements() {

    const [period, setPeriod] = React.useState('last_week');
    const [customperiod, setCustomperiod] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [startDate, setStartDate] = React.useState(new Date());

    const handleChange = (event) => {
      setPeriod(event.target.value);
      if(event.target.value === 'custom'){
        setCustomperiod(true);
      } else {
        setCustomperiod(false);
      }
    };

    return (
        <>
            <Sidebar />
            <Box className='main-screens' sx={{ bgcolor: '#E6E8EA', color: '#000', p: 2 }}>
                <h3>Statement</h3>
            </Box>
           
            <Box className='sub-main-screens' mt={3}>
            <h4>Statement</h4>       
            </Box>
            <Box className='sub-main-screens' mt={3}>
            <TextField
          id="outlined-select-currency"
          select
          label="Select Period"
          value={period}
          onChange={handleChange}
          helperText="Please select your period"
          size='small'         
        >
          {statement_period.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {customperiod && <Box  mt={3}>
        Start Date:
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        End Date:
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />        
        </Box>}
        <Box  mt={3}className="mb-5">
        <Button className='filled-primary' variant="contained" >
            Submit
          </Button>
       
          </Box>
        <Box  mt={3}className="mb-5">
        <h4>Print Your Account Statement</h4>  
       <hr></hr>
        <Button className='filled-primary printBtn' variant="contained" >
            Print
          </Button>
          </Box>
  <BasicTable />
            </Box>
            
        </>
    );
}

export default Statements;
