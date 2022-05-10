import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { useMediaQuery } from 'react-responsive'
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import QuestionaryIcon from '../../assets/images/questionary.svg';
import './index.css'


function Navbar(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated);
    const [clickedOnLogo, setClickedOnLogo] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const open = Boolean(anchorEl);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setIsAuthenticated(props.isAuthenticated);
    }, [props.isAuthenticated]);

    const onClickedLogo = () => {
        setClickedOnLogo(true);
        props.userClickedOnLogoParent(true)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} justifyContent="space-between">
                    <Grid item xs={4} sm={4} md={4} >

                        {isMobile ? <Typography alignItems='center' variant="h6" onClick={onClickedLogo} component="div">
                            Bank
                        </Typography> : <Typography variant="h6" onClick={onClickedLogo} component="div">
                           Bank
                        </Typography>}




                    </Grid>
                    {isMobile ? <Grid item xs={2} sm={2} md={2}></Grid> : <Grid item xs={4} sm={4} md={5}>

                        {/* {(isAuthenticated || clickedOnLogo) && <div className='navbar-search'> <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="How can we help ?"
                            inputProps={{ 'aria-label': 'How can we help ?' }}
                        />
                            <IconButton className="navbar-search-btn" type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{ color: '#FAB41E' }} />
                            </IconButton> </div>} */}
                    </Grid>}

                    <Grid item xs={6} sm={4} md={3}>
                       
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>


    );
}

export default Navbar;
