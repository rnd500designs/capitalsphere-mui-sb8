import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

const SideNavPage: React.FC = () => {
  return (
    <Box sx={{ marginTop: '100px' }} padding={10}>
      <h1>Side Nav Page</h1>
      <Drawer variant="permanent" sx={{ zIndex: -1 }}>
        <List sx={{ top: '200px', position: 'relative' }}>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNavPage;
