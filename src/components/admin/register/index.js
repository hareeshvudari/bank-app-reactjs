import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './register.css';
import ReCAPTCHA from "react-google-recaptcha";

function AdminRegister() {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center"
      alignItems="center">
      <Grid item xs={10} md={6} lg={4}>
        <Card variant="outlined" className='card-main card-bs'>
          <Typography variant="h5" mb={2} component="div">
            Admin Registration
          </Typography>
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="First Name" />
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Last Name" />
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Business Email" />
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth className='text-field' size='small' label="Company Name" />
          <TextField InputLabelProps={{ style: { fontSize: 13, lineHeight: 1.9 } }} fullWidth size='small' label="Registration Code" />
          <FormGroup>
            <FormControlLabel className='privacy-policy-check' control={<Checkbox />} label="I agree to the community Terms & Condtions and Privacy Policy*" />
          </FormGroup>
          <div className='mb-10'>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
          <Button fullWidth className='filled-primary' variant="contained" >
            Submit
          </Button>
          <Typography variant="p" mb={2} component="div">
            Do you have account ? <Link href="/admin/login">Login</Link>
          </Typography>
        </Card>

      </Grid>
    </Grid>

  );
}

export default AdminRegister;
