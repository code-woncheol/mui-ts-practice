// src/components/LanguageSwitch.tsx
import { Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  const toggleLanguage = () => {
    i18n.changeLanguage(isJapanese ? 'ko' : 'ja');
  };

  return (
    <Button onClick={toggleLanguage} color="inherit" size="small">
      {isJapanese ? '日本語' : '한국어'}
    </Button>
  );
};

export default LanguageSwitch;
