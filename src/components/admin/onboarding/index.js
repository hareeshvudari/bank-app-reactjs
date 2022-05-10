import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import msOfficeLogo from '../../../assets/images/ms-office.png';
import awsWorkspaceLogo from '../../../assets/images/workspaces_logo.png';
import msTeamsLogo from '../../../assets/images/msTeams.png';
import pieCharLogo from '../../../assets/images/pie_chart.png';
import AddIcon from '@mui/icons-material/Add';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Stack from '@mui/material/Stack';
import { useNavigate, useLocation } from "react-router-dom";
import './index.css';

function AdminOnboarding(props) {
    let navigate = useNavigate();
    let location = useLocation();
    const navigateToDashboard = () => {
        navigate("/dashboards");
        console.log('location', location);
        props.userClickedOnLogoParent(true)
    }

    const availableApps = [{
        img: msOfficeLogo

    }, 
    {
        img: awsWorkspaceLogo

    },
    {
        img: msTeamsLogo

    }
]

    return (
        <div className='onboarding-bg'>
            <Grid className='onboard-main'>
                <Card className='p-15' >
                    <Typography align='center' mb={2} component="div">
                        <Typography variant="h5" onClick={navigateToDashboard} className='welcome-title' component="span">
                            Welcome To Bank
                        </Typography>
                    </Typography>
                    <Grid container mb={4} mt={2}>
                        <Grid item xs={12}>
                            <Card className='card-bs'>
                                <Grid container>
                                    <Stack direction="row">
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                Overview
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>46</p>
                                                    <img src={pieCharLogo} alt="Logo" width='50px' />
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-bottom'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>3 <br /> Alarms</p>
                                                    <p className='vertical-line'></p>
                                                </Stack>
                                            </div>
                                        </Card>
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                Network
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>11 <br /> Devices</p>
                                                    <img src={pieCharLogo} alt="Logo" width='50px' />
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-bottom'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>0 <br /> Alarms</p>
                                                    <p className='vertical-line'></p>
                                                </Stack>
                                            </div>
                                        </Card>
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                Server
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>26 <br /> Devices</p>
                                                    <img src={pieCharLogo} alt="Logo" width='50px' />
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-bottom'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>5 <br /> Alarms</p>
                                                    <p className='vertical-line'></p>
                                                </Stack>
                                            </div>
                                        </Card>
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                Virtualization
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>5 <br /> Alarms</p>
                                                    <img src={pieCharLogo} alt="Logo" width='50px' />
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-bottom'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>3 <br /> Alarms</p>
                                                    <p className='vertical-line'></p>
                                                </Stack>
                                            </div>
                                        </Card>
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                NetFlow
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>3 <br /> Interfaces</p>
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-bottom'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>236MB <br /> Transferred</p>
                                                    <p className='vertical-line'></p>
                                                </Stack>
                                            </div>
                                        </Card>
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                NCM
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>11 <br /> Devices</p>
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-bottom'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>0 <br /> Changes</p>
                                                    <p className='vertical-line'></p>
                                                </Stack>
                                            </div>
                                        </Card>
                                        <Card variant='outlined' className='grid-card-main'>
                                            <Typography variant="p" className='service-card' component="span">
                                                FireWall
                                            </Typography>
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>1 <br /> FireWall</p>
                                                </Stack>
                                            </div>
                                            <hr className='admin-wel-boxes' />
                                            <div className='grid-card-top'>
                                                <Stack direction="row" spacing={2}>
                                                    <p>3 <br /> Alarms</p>
                                                    <img src={pieCharLogo} alt="Logo" width='50px' />
                                                </Stack>
                                            </div>
                                        </Card>
                                    </Stack>

                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container mb={2} rowSpacing={2} columnSpacing={{ xs: 2 }}>
                        <Grid item xs={12} sm={12} md={7} >
                            <Card className='card-bs available-apps'>
                                <Typography variant="h6" className='pl-15' gutterBottom component="div">
                                    Available Applications
                                </Typography>
                                <hr />
                                <div className='admin-popular-items-card-content p-15 pt-0'>
                                    <Grid container spacing={{ xs: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                        {availableApps.map((logo, index) => (
                                            <Grid item xs={6} sm={3} md={3} key={index}>
                                                <Card className='app-card-img card-bs' variant="outlined">
                                                    <img src={logo.img} alt="Logo" width='100px' />
                                                </Card>
                                            </Grid>
                                        ))}
                                        <Grid item xs={6} sm={3} md={3}>
                                            <Card className='app-card-img card-bs' variant="outlined">
                                                <AddIcon />
                                                <h6>Request for New App</h6>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}  >
                            <Card className='card-bs'>
                                <Typography variant="h6" className='pl-15' gutterBottom component="div">
                                    Reports
                                </Typography>
                                <hr />
                                <div className='admin-popular-items-card-content p-15 pt-0'>
                                    <Button fullWidth className='filled-secondary view-details-btn' variant="contained" >
                                        View Details
                                    </Button>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2}  >
                            <Card className='card-bs'>
                                <Typography variant="h6" className='pl-15' noWrap component="div">
                                    Latest Tickets
                                </Typography>
                                <hr />
                                <div className='admin-popular-items-card-content p-15 pt-0'>
                                    <Grid container>
                                        <Grid>
                                            <p className='sub-title '>Ticket <span className='inc-color'> #435263</span></p>
                                            <p className=' description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                            <hr />
                                            <p className='sub-title '>Ticket <span className='inc-color'> #435263</span></p>
                                            <p className=' description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                                        </Grid>
                                    </Grid>
                                    <Button fullWidth className='transparent-btn' variant="contained" >
                                        <ArrowCircleDownIcon />
                                    </Button>
                                </div>
                            </Card>
                        </Grid>

                    </Grid>
                </Card>
            </Grid>
        </div>

    );
}

export default AdminOnboarding;
