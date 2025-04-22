import { Stack, Button, Typography, IconButton, CircularProgress } from '@mui/material';
import { Delete, Send, Save } from '@mui/icons-material';
import { useState } from 'react';

const ButtonsPage = () => {
  const handleClick = (label: string) => {
    console.log(`${label} 버튼 클릭됨`);
  };

  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h5">🖱️ MUI 버튼 종류 예제</Typography>

      {/* 기본 버튼들 */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={() => handleClick('Primary')}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => handleClick('Secondary')}>
          Secondary
        </Button>
        <Button variant="text" onClick={() => handleClick('Text')}>
          Text
        </Button>
      </Stack>

      {/* 색상 구분 */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success">성공</Button>
        <Button variant="contained" color="error">오류</Button>
        <Button variant="contained" color="warning">경고</Button>
        <Button variant="contained" color="info">정보</Button>
      </Stack>

      {/* 비활성 및 FullWidth */}
      <Stack direction="row" spacing={2}>
        <Button disabled>Disabled</Button>
        <Button fullWidth sx={{ maxWidth: 200 }} variant="contained">
          Full Width
        </Button>
      </Stack>

      {/* 아이콘 버튼 */}
      <Stack direction="row" spacing={2}>
        <IconButton color="error" onClick={() => handleClick('Delete')}>
          <Delete />
        </IconButton>
        <Button variant="contained" startIcon={<Send />} onClick={() => handleClick('Send')}>
          보내기
        </Button>
        <Button variant="outlined" endIcon={<Save />} onClick={() => handleClick('Save')}>
          저장
        </Button>
      </Stack>

      {/* 로딩 버튼 */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleLoadingClick} disabled={loading}>
          {loading ? <CircularProgress size={20} color="inherit" /> : '로딩 버튼'}
        </Button>
      </Stack>

      {/* 크기 조절 버튼 */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="small">작음</Button>
        <Button variant="contained" size="medium">중간</Button>
        <Button variant="contained" size="large">큼</Button>
      </Stack>
    </Stack>
  );
};

export default ButtonsPage;
