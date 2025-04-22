import { Box, Typography, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

const originalRows = [
  { id: 1, name: '홍길동', age: 32, email: 'hong@example.com' },
  { id: 2, name: '김유신', age: 45, email: 'kim@example.com' },
  { id: 3, name: '이순신', age: 28, email: 'lee@example.com' },
  { id: 4, name: '강감찬', age: 37, email: 'kang@example.com' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: '이름', width: 150 },
  { field: 'age', headerName: '나이', width: 100 },
  { field: 'email', headerName: '이메일', width: 200 },
];

const DataGridPage = () => {
  const [searchText, setSearchText] = useState('');

  // 검색 조건에 따라 행 필터링
  const filteredRows = originalRows.filter((row) =>
    row.name.includes(searchText) || row.email.includes(searchText)
  );

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        🔍 DataGrid 검색 기능 실습
      </Typography>

      <TextField
        label="이름 또는 이메일로 검색"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
          }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default DataGridPage;
