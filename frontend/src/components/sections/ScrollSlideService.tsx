import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

const services = [
  {
    num: '①',
    title: '痩せたい・身体を絞りたい',
    text: '「なぜ脂肪が落ちるのか」を理解しながら進むから、リバウンドしにくく、知識として一生使えます。',
  },
  {
    num: '②',
    title: '身体の違和感・不調を改善したい',
    text: 'そこには必ず原因があります。検査で数値を見ながら、食事・サプリで根本から整えます。',
  },
  {
    num: '③',
    title: '今の健康を、ずっとキープしたい',
    text: '生活習慣のリスクを数値で見える化しながら、ずっと思うように動ける身体を一緒に整えていきます。',
  },
];

export default function ScrollSlideService() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: palette.background.warm,
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.8rem',
              color: palette.secondary.main,
              letterSpacing: '0.2em',
              mb: 2,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            SERVICE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '1.2rem', md: '1.6rem' },
              color: palette.text.primary,
              lineHeight: 1.8,
            }}
          >
            3つの入口
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: 3 },
            }}
          >
            {services.map((s) => (
              <Box
                key={s.num}
                sx={{
                  flex: 1,
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  border: `1px solid ${palette.accent.warmGray}`,
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.3rem',
                    color: palette.secondary.main,
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  {s.num}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, color: palette.text.primary, fontWeight: 500, mb: 1.5 }}
                >
                  {s.title}
                </Typography>
                <Typography
                  sx={{ color: palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.85rem' }, lineHeight: 1.9 }}
                >
                  {s.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
