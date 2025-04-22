import { Typography, Divider, Stack } from '@mui/material';

const TypographyPage = () => {
  return (
    <Stack spacing={2}>
      {/* 제목 계층 구조 */}
      <Typography variant="h3" gutterBottom>
        📄 Typography 연습 (제목 계층)
      </Typography>

      <Divider />

      <Typography variant="h1">H1 제목 - 보통 페이지 타이틀</Typography>
      <Typography variant="h2">H2 제목 - 섹션 타이틀</Typography>
      <Typography variant="h3">H3 제목 - 서브섹션 타이틀</Typography>
      <Typography variant="h4">H4 제목 - 카드 제목</Typography>
      <Typography variant="h5">H5 제목 - 소제목</Typography>
      <Typography variant="h6">H6 제목 - 작은 소제목</Typography>

      <Divider />

      {/* 본문 스타일 */}
      <Typography variant="subtitle1">
        📌 부제목 1 - 본문보다 살짝 강조
      </Typography>
      <Typography variant="subtitle2">
        📌 부제목 2 - 더 작고 약하게
      </Typography>
      <Typography variant="body1">
        ✏️ body1 - 일반 본문 텍스트입니다. 블로그, 뉴스, 설명 글 등에 사용됩니다.
      </Typography>
      <Typography variant="body2">
        ✏️ body2 - 작은 본문 텍스트입니다. 부가 설명이나 메모용으로 활용됩니다.
      </Typography>

      <Divider />

      {/* 기타 스타일 */}
      <Typography color="text.secondary">
        ⚙️ color="text.secondary" - 흐릿한 보조 텍스트
      </Typography>
      <Typography fontWeight="bold">
        💪 fontWeight="bold" - 강조 텍스트
      </Typography>
      <Typography fontStyle="italic">
        ✍️ fontStyle="italic" - 기울임꼴
      </Typography>
      <Typography noWrap>
        ✂️ noWrap - 긴 텍스트 한 줄로 처리되고 말줄임(...) 처리됩니다. 아주 긴 텍스트 예시입니다. 아주 길어요...
        ✂️ noWrap - 긴 텍스트 한 줄로 처리되고 말줄임(...) 처리됩니다. 아주 긴 텍스트 예시입니다. 아주 길어요...
        ✂️ noWrap - 긴 텍스트 한 줄로 처리되고 말줄임(...) 처리됩니다. 아주 긴 텍스트 예시입니다. 아주 길어요...
        ✂️ noWrap - 긴 텍스트 한 줄로 처리되고 말줄임(...) 처리됩니다. 아주 긴 텍스트 예시입니다. 아주 길어요...
        ✂️ noWrap - 긴 텍스트 한 줄로 처리되고 말줄임(...) 처리됩니다. 아주 긴 텍스트 예시입니다. 아주 길어요...
      </Typography>
    </Stack>
  );
};

export default TypographyPage;
