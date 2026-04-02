import { Box, Container, Typography } from '@mui/material';
import { palette } from '../../theme/palette';

const services = [
  {
    num: '01',
    title: '個別伴走サポート',
    sub: '体質改善プラン',
    text: '一人ひとりの体質や生活習慣に合わせ、検査データと科学的根拠をもとに体質改善をサポートします。',
    image: '',
  },
  {
    num: '02',
    title: 'ファスティング指導',
    sub: 'オプティマムファスティング',
    text: '栄養学に基づいた安全なファスティング。筋肉量を維持しながら、効率よく脂肪を落とします。',
    image: '',
  },
  {
    num: '03',
    title: 'セミナー・講師活動',
    sub: '予防医学セミナー',
    text: '予防医学の考え方を、研究者ならではの視点でわかりやすく伝えます。のべ200名以上の登壇実績。',
    image: '/images/seminar.jpg',
  },
];

export default function ScrollSlideHowService() {
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
            HOW
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
            3つのサービス
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
                  overflow: 'hidden',
                }}
              >
                {s.image && (
                  <Box
                    component="img"
                    src={s.image}
                    alt={s.title}
                    sx={{
                      width: '100%',
                      height: { xs: 120, md: 140 },
                      objectFit: 'cover',
                    }}
                  />
                )}
                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.5rem',
                    color: palette.secondary.main,
                    fontWeight: 300,
                    mb: 0.5,
                  }}
                >
                  {s.num}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, color: palette.text.primary, fontWeight: 500, mb: 0.5 }}
                >
                  {s.title}
                </Typography>
                <Typography
                  sx={{ color: palette.text.light, fontSize: '0.75rem', mb: 1.5, letterSpacing: '0.04em' }}
                >
                  {s.sub}
                </Typography>
                <Typography
                  sx={{ color: palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.85rem' }, lineHeight: 1.9 }}
                >
                  {s.text}
                </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
