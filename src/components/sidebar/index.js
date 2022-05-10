import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Link from '@mui/material/Link';
import './index.css';

function Sidebar() {
    return (
        <ProSidebar>
               <Menu iconShape="square">
                {/* <hr /> */}
                <MenuItem> <Link href="/dashboards">Account View</Link></MenuItem>
                <MenuItem> <Link href="/fundtransfer">Fund Transfer</Link></MenuItem>
                <MenuItem> <Link href="/statements">Statement</Link></MenuItem>              
                {/* <hr /> */}
                {/* <SubMenu title="Request rights or items">
                    <MenuItem>New Virtual Desktop</MenuItem>
                    <MenuItem>New Email Account</MenuItem>
                    <MenuItem>New Application Request</MenuItem>
                    <MenuItem>Virtual Room</MenuItem>
                </SubMenu>
                <SubMenu title="Request Tech Support">
                    <MenuItem>Create New</MenuItem>
                    <MenuItem>My Open Tickets</MenuItem>
                    <MenuItem>My Open Requests</MenuItem>
                </SubMenu> */}
            </Menu>
        </ProSidebar>
    );
}

export default Sidebar;
