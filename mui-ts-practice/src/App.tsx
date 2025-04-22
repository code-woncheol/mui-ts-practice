import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Home from './pages/HomePage';
import Buttons from './pages/ButtonsPage';
import TypographyPage from './pages/TypographyPage';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/buttons">Buttons</Button>
          <Button color="inherit" component={Link} to="/typography">Typography</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/typography" element={<TypographyPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
