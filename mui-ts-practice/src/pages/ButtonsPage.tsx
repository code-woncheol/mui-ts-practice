import { Stack, Button } from '@mui/material';

const ButtonsPage = () => {
  return (
    <Stack spacing={2}>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
    </Stack>
  );
};

export default ButtonsPage;
