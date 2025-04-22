import { Autocomplete, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian' },
  { label: 'Elderberry', value: 'elderberry' },
];

const AutocompletePage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        🔍 MUI Autocomplete 실습
      </Typography>

      <Autocomplete
        options={items}
        getOptionLabel={(option) => option.label}
        onChange={(_, value) => setSelected(value ? value.label : null)}
        renderInput={(params) => (
          <TextField {...params} label="과일 검색" variant="outlined" />
        )}
        sx={{ width: 300 }}
      />

      {selected && (
        <Typography sx={{ mt: 2 }}>
          선택된 값: <strong>{selected}</strong>
        </Typography>
      )}
    </Box>
  );
};

export default AutocompletePage;
