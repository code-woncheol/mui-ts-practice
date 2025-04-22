import { Button } from '@mui/material';
import { useSnackbar } from '../contexts/SnackbarContext';

const HomePage = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <div>
      <h1>🏠 홈 화면</h1>
      <h1>전역으로 Snackbar 사용하기</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => showSnackbar('홈에서 띄운 알림입니다!', 'success')}
      >
        success 띄우기
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => showSnackbar('홈에서 띄운 알림입니다!', 'error')}
      >
        error 띄우기
      </Button>
    </div>
  );
};

export default HomePage;
