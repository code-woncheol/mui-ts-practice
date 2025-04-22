import {
    Box,
    Button,
    TextField,
    Typography,
  } from '@mui/material';
  import { useForm } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  import * as yup from 'yup';
  
  const schema = yup.object({
    name: yup.string().required('이름을 입력해주세요'),
    email: yup.string().email('유효한 이메일을 입력해주세요').required('이메일은 필수입니다'),
  });
  
  const HookFormPage = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = (data: any) => {
      alert(`✅ 이름: ${data.name}\n📧 이메일: ${data.email}`);
    };
  
    return (
      <Box sx={{ mt: 4, maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          ✅ React Hook Form 실습
        </Typography>
  
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="이름"
            fullWidth
            margin="normal"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
  
          <TextField
            label="이메일"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
  
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            제출
          </Button>
        </form>
      </Box>
    );
  };
  
  export default HookFormPage;
  