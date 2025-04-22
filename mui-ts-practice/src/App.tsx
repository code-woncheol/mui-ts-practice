import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  ThemeProvider,
  CssBaseline,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { lightTheme, darkTheme } from './theme';
import Home from './pages/HomePage';
import Buttons from './pages/ButtonsPage';
import TypographyPage from './pages/TypographyPage';
import FormsPage from './pages/FormsPage';
import DialogPage from './pages/DialogPage';
import TablePage from './pages/TablePage';
import TabsPage from './pages/TabsPage';
import SnackbarPage from './pages/SnackbarPage';
import DrawerPage from './pages/DrawerPage';
import AccordionPage from './pages/AccordionPage';
import { SnackbarProvider } from './contexts/SnackbarContext';
import AutocompletePage from './pages/AutocompletePage';
import HookFormPage from './pages/HookFormPage';
import DataGridPage from './pages/DataGridPage';
import LanguageSwitch from './components/LanguageSwitch';
import Box from '@mui/material/Box';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/buttons', label: 'Buttons' },
  { path: '/typography', label: 'Typography' },
  { path: '/forms', label: 'Forms' },
  { path: '/dialog', label: 'Dialog' },
  { path: '/table', label: 'Table' },
  { path: '/tabs', label: 'Tabs' },
  { path: '/snackbar', label: 'Snackbar' },
  { path: '/drawer', label: 'Drawer' },
  { path: '/accordion', label: 'Accordion' },
  { path: '/autocomplete', label: 'Autocomplete' },
  { path: '/hook-form', label: 'Hook Form' },
  { path: '/datagrid', label: 'DataGrid' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <List>
        {navItems.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <BrowserRouter>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                color="default"
                sx={{ ml: 'auto' }}
              />
              <LanguageSwitch />
            </Toolbar>
          </AppBar>

          <Container sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/typography" element={<TypographyPage />} />
              <Route path="/forms" element={<FormsPage />} />
              <Route path="/dialog" element={<DialogPage />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/tabs" element={<TabsPage />} />
              <Route path="/snackbar" element={<SnackbarPage />} />
              <Route path="/drawer" element={<DrawerPage />} />
              <Route path="/accordion" element={<AccordionPage />} />
              <Route path="/autocomplete" element={<AutocompletePage />} />
              <Route path="/hook-form" element={<HookFormPage />} />
              <Route path="/datagrid" element={<DataGridPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;