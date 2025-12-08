'use client';

import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import UpdateIcon from "@mui/icons-material/Update";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const navItems = [
    { text: 'Main', icon: <HomeIcon />, path: '/admin' },
    { text: 'Starred', icon: <StarIcon />, path: '#' },
    { text: 'Individuals', icon: <PeopleIcon />, path: '/admin/individuals' },
    { text: 'Galleries', icon: <CollectionsIcon />, path: '#' },
    { text: 'Statistics', icon: <AnalyticsIcon />, path: '#' },
    { text: 'Settings', icon: <SettingsIcon />, path: '#' },
    { text: 'History', icon: <HistoryIcon />, path: '#' },
    { text: 'Logs', icon: <UpdateIcon />, path: '#' },
    { text: 'Exit To App', icon: <ExitToAppIcon color='primary' />, path: '#' },
    { text: 'Logout', icon: <LogoutIcon color='error'/>, path: '#' },
]

export default function AdminSidebar({content, selectedButton} : {content?: React.ReactNode; selectedButton: string;}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedListItemButton, setSelectedListItemButton] = useState(selectedButton);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                صفحة المشرف
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component="a" href={item.path} sx={{ textAlign: 'center' }} selected={selectedListItemButton == item.text}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        صفحة المشرف
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button component="a" href={item.path} key={item.text} sx={{ color: '#fff' }} startIcon={item.icon}>
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {content}
            </Box>
        </Box>
    )
}