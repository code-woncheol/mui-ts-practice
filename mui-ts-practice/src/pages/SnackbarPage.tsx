import {
    Box,
    Button,
    Snackbar,
    Alert,
    Typography,
  } from '@mui/material';
  import { useState } from 'react';
  
  const SnackbarPage = () => {
    const [open, setOpen] = useState(false);
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  
    const handleClick = (type: 'success' | 'error') => {
      setAlertType(type);
      setOpen(true);
    };
  
    const handleClose = (
      _event?: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === 'clickaway') return;
      setOpen(false);
    };
  
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          🛎️ MUI Snackbar 실습
        </Typography>
  
        <Button
          variant="contained"
          color="success"
          onClick={() => handleClick('success')}
          sx={{ mx: 1 }}
        >
          성공 알림
        </Button>
  
        <Button
          variant="contained"
          color="error"
          onClick={() => handleClick('error')}
          sx={{ mx: 1 }}
        >
          에러 알림
        </Button>
  
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
            {alertType === 'success' ? '성공적으로 처리되었습니다!' : '문제가 발생했습니다.'}
          </Alert>
        </Snackbar>
      </Box>
    );
  };
  
  export default SnackbarPage;
  