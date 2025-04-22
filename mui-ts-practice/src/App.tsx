import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { AppBar, Toolbar, Button, Container, ThemeProvider, CssBaseline, Switch } from '@mui/material';
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




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/buttons">Buttons</Button>
          <Button color="inherit" component={Link} to="/typography">Typography</Button>
          <Button color="inherit" component={Link} to="/forms">Forms</Button>
          <Button color="inherit" component={Link} to="/dialog">Dialog</Button>
          <Button color="inherit" component={Link} to="/table">Table</Button>
          <Button color="inherit" component={Link} to="/tabs">Tabs</Button>
          <Button color="inherit" component={Link} to="/snackbar">Snackbar</Button>
          <Button color="inherit" component={Link} to="/drawer">Drawer</Button>
          <Button color="inherit" component={Link} to="/accordion">Accordion</Button>
          <Button color="inherit" component={Link} to="/autocomplete">Autocomplete</Button>
          <Button color="inherit" component={Link} to="/hook-form">Hook Form</Button>
          <Button color="inherit" component={Link} to="/datagrid">DataGrid</Button>



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
