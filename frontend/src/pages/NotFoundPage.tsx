import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { palette } from '../theme/palette';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 20, pb: 16, textAlign: 'center' }}>
      <Container>
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '4rem',
            color: palette.secondary.main,
            mb: 3,
          }}
        >
          404
        </Typography>
        <Typography variant="h3" sx={{ mb: 2, color: palette.text.primary }}>
          ページが見つかりません
        </Typography>
        <Typography variant="body1" sx={{ color: palette.text.secondary, mb: 5 }}>
          お探しのページは移動または削除された可能性があります。
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            backgroundColor: palette.primary.main,
            '&:hover': { backgroundColor: palette.primary.light },
          }}
        >
          ホームに戻る
        </Button>
      </Container>
    </Box>
  );
}
