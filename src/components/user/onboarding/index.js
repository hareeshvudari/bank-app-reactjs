import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import msTeamsLogo from '../../../assets/images/msTeams.png';
import awsWorkspaceLogo from '../../../assets/images/workspaces_logo.png';
import openBook from '../../../assets/images/open_book.svg';
import orderList from '../../../assets/images/order_list.svg';
import successCircle from '../../../assets/images/success_circle.svg';
import disableCircle from '../../../assets/images/disable_circle.svg';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

import './index.css';
function Onboarding(props) {
    let navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/dashboards");
        props.userClickedOnLogoParent(true)
    }

    const availableApps = [
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
                    <Grid container mb={2}>
                        <Grid item xs={12} md={12}>
                            <Card className='card-bs' >
                                <table width='100%' className='app-status-main p-15 pt-0'>
                                    <thead className='app-status-thead'>
                                        <tr>
                                            <td width='60%'>
                                                <Typography variant="h6" gutterBottom component="div">
                                                    Application Services Status
                                                </Typography>
                                            </td>
                                            <td width='40px'></td>
                                            <td width='40px'></td>
                                            <td width='15%'>Availability & Performance Management</td>
                                            <td width='15%'>Virtual Machine Backup</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Default Application</td>
                                            <td><img src={orderList} alt='open-book' width='20px' /></td>
                                            <td><img src={openBook} alt='open-book' width='20px' /> </td>
                                            <td><img src={successCircle} alt='open-book' width='20px' /> </td>
                                            <td><img src={successCircle} alt='open-book' width='20px' /> </td>
                                        </tr>
                                        <tr>
                                            <td>Unsupported Resources</td>
                                            <td><img src={orderList} alt='open-book' width='20px' /></td>
                                            <td></td>
                                            <td><img src={successCircle} alt='open-book' width='20px' /></td>
                                            <td><img src={disableCircle} alt='open-book' width='20px' /></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container mb={2} rowSpacing={2} columnSpacing={{ xs: 2 }}>
                        <Grid item xs={12} md={7} >
                            <Card className='card-bs inc-raise-card'>
                                <Typography variant="h6" className='pl-15' gutterBottom component="div">
                                    Popular Items
                                </Typography>
                                <hr />
                                <div className='popular-items-card-content p-15 pt-0' >
                                    <Grid container spacing={{ xs: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                        {Array.from(Array(2)).map((_, index) => (
                                            <Grid mt={2} item xs={6} sm={6} md={6} key={index}>
                                                <Card variant="outlined" className='card-bs' >
                                                    <Typography variant="p" className='sub-title pl-15' noWrap component="div">
                                                        Raise an Incident
                                                    </Typography>
                                                    {/* <p className='sub-title pl-15 pr-15'>Raise an Incident</p> */}
                                                    <p className='pl-15 pr-15 description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                                    <Button fullWidth className='filled-secondary view-details-btn' variant="contained" >
                                                        <Typography variant="p" noWrap component="div">
                                                            View Details
                                                        </Typography>
                                                    </Button>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={5} >
                            <Card className='card-bs'>
                                <Typography variant="h6" className='pl-15' gutterBottom component="div">
                                    Available Applications
                                </Typography>
                                <hr />
                                <div className='popular-items-card-content p-15 pt-0'>
                                    <h5>My Desktop </h5>
                                    <Grid container spacing={{ xs: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                        {availableApps.map((logo, index) => (
                                            <Grid item xs={6} sm={4} md={4} key={index}>
                                                <Card className='app-card-img card-bs' variant="outlined">
                                                    <img src={logo.img} alt="Logo" width='100px' />
                                                </Card>
                                            </Grid>
                                        ))}
                                        <Grid item xs={6} sm={4} md={4}>
                                            <Card className='app-card-img card-bs' variant="outlined">
                                                <AddIcon />
                                                <h6>Request for New App</h6>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Card className='card-bs'>
                                <Typography variant="h6" className='pl-15' gutterBottom component="div">
                                    Latest Activity
                                </Typography>
                                <hr />
                                <div className='p-15 pt-0'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    <p className='latest-activity-comment'>No System is reporting an issue</p>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </div>
    );
}

export default Onboarding;
