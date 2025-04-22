import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Typography,
  } from '@mui/material';
  import { useState } from 'react';
  
  const DialogPage = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => {
      alert(`입력된 값: ${input}`);
      handleClose();
    };
  
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          📦 MUI Dialog 실습
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          열기
        </Button>
  
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>입력창</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="내용 입력"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={handleSubmit} variant="contained">확인</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  };
  
  export default DialogPage;
  