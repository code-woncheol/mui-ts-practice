import {
    Box,
    Tabs,
    Tab,
    Typography,
  } from '@mui/material';
  import { useState } from 'react';
  
  function TabPanel(props: {
    children: React.ReactNode;
    index: number;
    value: number;
  }) {
    const { children, value, index } = props;
  
    return (
      <div hidden={value !== index}>
        {value === index && (
          <Box sx={{ py: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  const TabsPage = () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', mt: 4 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="소개" />
          <Tab label="설정" />
          <Tab label="도움말" />
        </Tabs>
  
        <TabPanel value={value} index={0}>
          이 페이지는 MUI Tabs 예제입니다.
        </TabPanel>
        <TabPanel value={value} index={1}>
          설정 탭입니다. 여기에 설정 내용이 들어갑니다.
        </TabPanel>
        <TabPanel value={value} index={2}>
          도움이 필요하신가요? 이곳에서 지원을 받으세요.
        </TabPanel>
      </Box>
    );
  };
  
  export default TabsPage;
  