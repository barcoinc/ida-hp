import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

export default function ScrollSlideWhy2() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.default,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              lineHeight: 2.2,
              mb: 5,
            }}
          >
            私はもともと、大手製薬会社で
            <br />
            抗がん剤の新薬開発に携わっていました。
            <br />
            がんの苦しみを何とかできないか。
            <br />
            そんな思いで、膨大な論文を読み、研究を重ねてきた。
          </Typography>

          <Typography
            sx={{
              color: palette.text.secondary,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              lineHeight: 2.2,
            }}
          >
            でも現実は、抗がん剤の世界では、
            <br />
            10年で亡くなるはずだった人が、11年生きられた。
            <br />
            それが、「画期的な成果」と呼ばれる世界。
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
