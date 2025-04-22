import {
  Box,
  Button,
  Snackbar,
  Alert,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

const SnackbarPage = () => {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState<AlertType>('success');
  const [message, setMessage] = useState('');
  const [basicOpen, setBasicOpen] = useState(false);

  const handleClick = (type: AlertType, msg: string) => {
    setAlertType(type);
    setMessage(msg);
    setOpen(true);
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleBasicSnackbar = () => {
    setBasicOpen(true);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        🛎️ MUI Snackbar 확장 실습
      </Typography>

      {/* 다양한 Alert 유형 */}
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleClick('success', '성공적으로 처리되었습니다!')}
          sx={{ mx: 1 }}
        >
          성공
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => handleClick('error', '문제가 발생했습니다.')}
          sx={{ mx: 1 }}
        >
          에러
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => handleClick('warning', '주의가 필요합니다.')}
          sx={{ mx: 1 }}
        >
          경고
        </Button>

        <Button
          variant="contained"
          color="info"
          onClick={() => handleClick('info', '정보성 메시지입니다.')}
          sx={{ mx: 1 }}
        >
          정보
        </Button>
      </Box>

      {/* 기본 Snackbar */}
      <Button
        variant="outlined"
        onClick={handleBasicSnackbar}
        sx={{ my: 2 }}
      >
        기본 Snackbar 보기
      </Button>

      {/* Alert 있는 Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>

      {/* 기본 텍스트만 있는 Snackbar */}
      <Snackbar
        open={basicOpen}
        autoHideDuration={3000}
        onClose={() => setBasicOpen(false)}
        message="이건 기본 Snackbar입니다."
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={() => setBasicOpen(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default SnackbarPage;
