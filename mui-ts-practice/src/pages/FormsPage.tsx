import {
    Box,
    TextField,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    FormGroup,
  } from '@mui/material';
  import { useState } from 'react';
  
  const FormsPage = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [agree, setAgree] = useState(false);
  
    const handleSubmit = () => {
      alert(`이름: ${name}, 성별: ${gender}, 약관 동의: ${agree}`);
    };
  
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
        <TextField
          label="이름"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
  
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>성별</FormLabel>
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="남성" />
            <FormControlLabel value="female" control={<Radio />} label="여성" />
          </RadioGroup>
        </FormControl>
  
        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            }
            label="약관에 동의합니다"
          />
        </FormGroup>
  
        <Button variant="contained" onClick={handleSubmit} fullWidth>
          제출
        </Button>
      </Box>
    );
  };
  
  export default FormsPage;
  