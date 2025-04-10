import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { NavLink, useLocation } from 'react-router';

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: '/doc/dashboard' },
  { text: 'Patients', icon: <PeopleRoundedIcon />, path: '/doc/patients' },
];

const secondaryListItems: any[] = [
  // { text: 'Settings', icon: <SettingsRoundedIcon /> },
  // { text: 'About', icon: <InfoRoundedIcon /> },
  // { text: 'Feedback', icon: <HelpRoundedIcon /> },
  { text: 'Demo', icon: <LibraryBooksIcon />, path: '/books'},
];

export default function MenuContent() {
  const location = useLocation();
const { hash, pathname, search } = location;
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <NavLink to={item.path} >
            <ListItemButton selected={item.path === pathname}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
            </NavLink>
          </ListItem>
          
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
