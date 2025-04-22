import {
    Box,
    Drawer,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    Typography,
    ListItemButton,
  } from '@mui/material';
  import { useState } from 'react';
  
  const menuItems = ['홈', '게시판', '회원정보', '설정'];
  
  const DrawerPage = () => {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (open: boolean) => () => {
      setOpen(open);
    };
  
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          📚 MUI Drawer 실습
        </Typography>
  
        <Button variant="contained" onClick={toggleDrawer(true)}>
          사이드 메뉴 열기
        </Button>
  
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
              {menuItems.map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="로그아웃" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    );
  };
  
  export default DrawerPage;
  