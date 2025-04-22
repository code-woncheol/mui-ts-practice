import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
  const AccordionPage = () => {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          🧩 MUI Accordion 실습
        </Typography>
  
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Q1. MUI란 무엇인가요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MUI는 React 기반의 UI 라이브러리로, 빠르게 아름다운 UI를 만들 수 있도록 도와줍니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Q2. 어디에 주로 사용하나요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              관리자 페이지, 마이페이지, 게시판 등 다양한 웹 애플리케이션에서 사용됩니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Q3. 커스터마이징이 쉬운가요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              네! 테마 시스템과 sx 스타일링을 통해 다양한 커스터마이징이 가능합니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };
  
  export default AccordionPage;
  