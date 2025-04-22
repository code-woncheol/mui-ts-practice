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
  Typography,
} from '@mui/material';
import { useSnackbar } from '../contexts/SnackbarContext';
import { useForm, Controller } from 'react-hook-form';

type FormValues = {
  name: string;
  gender: string;
  agree: boolean;
};

const FormsPage = () => {
  const { showSnackbar } = useSnackbar();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      gender: '',
      agree: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    showSnackbar(`이름: ${data.name}, 성별: ${data.gender}, 약관 동의: ${data.agree}`, 'success');
    reset();
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 6, px: 2 }}>
      <Typography variant="h5" gutterBottom>
        📋 회원 정보 입력 (react-hook-form)
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* 이름 입력 */}
        <Controller
          name="name"
          control={control}
          rules={{ required: '이름은 필수입니다.' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="이름"
              fullWidth
              variant="outlined"
              sx={{ mb: 3 }}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        {/* 성별 선택 */}
        <FormControl component="fieldset" sx={{ mb: 3 }} error={!!errors.gender}>
          <FormLabel component="legend">성별</FormLabel>
          <Controller
            name="gender"
            control={control}
            rules={{ required: '성별을 선택해주세요.' }}
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value="male" control={<Radio />} label="남성" />
                <FormControlLabel value="female" control={<Radio />} label="여성" />
              </RadioGroup>
            )}
          />
          <Typography variant="caption" color="error">
            {errors.gender?.message}
          </Typography>
           {/* 약관 동의 체크박스 */}
        <Controller
          name="agree"
          control={control}
          rules={{ required: '약관 동의는 필수입니다.' }}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="개인정보 수집 및 이용에 동의합니다."
            />
          )}
        />
        </FormControl>

       
        <Typography variant="caption" color="error" sx={{ display: 'block', mb: 2 }}>
          {errors.agree?.message}
        </Typography>

        {/* 제출 버튼 */}
        <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5 }}>
          제출하기
        </Button>
      </form>
    </Box>
  );
};

export default FormsPage;
