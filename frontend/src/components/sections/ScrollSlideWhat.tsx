import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

const entries = [
  { num: '01', label: '個別伴走サポート', sub: '体質改善プラン' },
  { num: '02', label: 'ファスティング指導', sub: 'オプティマムファスティング' },
  { num: '03', label: 'セミナー・講師活動', sub: '予防医学セミナー' },
];

export default function ScrollSlideWhat() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.paper,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.8rem',
              color: palette.secondary.main,
              letterSpacing: '0.2em',
              mb: 4,
              fontWeight: 500,
            }}
          >
            SERVICE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
              mb: 6,
            }}
          >
            予防医学コンシェルジュが提供する
            <br />
            3つの価値
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 5 },
              justifyContent: 'center',
            }}
          >
            {entries.map((e) => (
              <Box key={e.num} sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.8rem',
                    color: palette.secondary.main,
                    fontWeight: 300,
                    mb: 0.5,
                  }}
                >
                  {e.num}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: palette.text.primary, fontSize: '0.9rem', fontWeight: 500 }}
                >
                  {e.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: palette.text.light, fontSize: '0.75rem', mt: 0.5 }}
                >
                  {e.sub}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
