import { Button } from '@mui/material';
import { useSnackbar } from '../contexts/SnackbarContext';

const HomePage = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <div>
      <h1>🏠 홈 화면</h1>
      <Button
        variant="contained"
        onClick={() => showSnackbar('홈에서 띄운 알림입니다!', 'success')}
      >
        알림 띄우기
      </Button>
    </div>
  );
};

export default HomePage;
