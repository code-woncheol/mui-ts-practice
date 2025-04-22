import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
  } from '@mui/material';
  
  const rows = [
    { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자' },
    { id: 2, name: '이순신', email: 'lee@example.com', role: '사용자' },
    { id: 3, name: '김유신', email: 'kim@example.com', role: '게스트' },
  ];
  
  const TablePage = () => {
    return (
      <>
        <Typography variant="h5" sx={{ my: 2 }}>
          📊 사용자 목록 테이블
        </Typography>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>이메일</TableCell>
                <TableCell>역할</TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
  
  export default TablePage;
  