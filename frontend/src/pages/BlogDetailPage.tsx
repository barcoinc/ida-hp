import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Skeleton,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../hooks/useScrollAnimation';
import { palette } from '../theme/palette';

interface Article {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  publishedAt: string;
  author: string;
}

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;

      try {
        const res = await fetch(`/api/note-article?id=${id}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error('Failed to fetch article:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Skeleton variant="rectangular" height={400} sx={{ mb: 4, borderRadius: 2 }} />
          <Skeleton variant="text" height={60} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="40%" sx={{ mb: 4 }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" />
        </Container>
      </Box>
    );
  }

  if (error || !article) {
    return (
      <Box sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 }, textAlign: 'center' }}>
        <Container>
          <Typography variant="h5" sx={{ mb: 4, color: palette.text.primary }}>
            記事が見つかりませんでした
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/blog')}
            sx={{
              borderColor: palette.primary.main,
              color: palette.primary.main,
            }}
          >
            ブログ一覧に戻る
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <>
      {/* ヘッダー画像 */}
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 4, md: 6 },
          backgroundColor: palette.background.warm,
        }}
      >
        <Container maxWidth="md">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp}>
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/blog')}
                sx={{
                  mb: 3,
                  color: palette.text.secondary,
                  '&:hover': { color: palette.primary.main },
                }}
              >
                ブログ一覧に戻る
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box
                component="img"
                src={article.thumbnail}
                alt={article.title}
                sx={{
                  width: '100%',
                  height: { xs: 200, md: 400 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 4,
                }}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  color: palette.text.primary,
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {article.title}
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: palette.text.light }}>
                <Typography variant="body2">
                  {formatDate(article.publishedAt)}
                </Typography>
                <Typography variant="body2">|</Typography>
                <Typography variant="body2">
                  {article.author}
                </Typography>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* 記事本文 */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Box
              sx={{
                '& p': {
                  fontSize: '1rem',
                  lineHeight: 2,
                  color: palette.text.primary,
                  mb: 3,
                },
                '& h2, & h3': {
                  fontWeight: 600,
                  color: palette.text.primary,
                  mt: 5,
                  mb: 2,
                },
                '& h2': {
                  fontSize: '1.5rem',
                },
                '& h3': {
                  fontSize: '1.25rem',
                },
                '& img': {
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  my: 3,
                },
                '& a': {
                  color: palette.secondary.main,
                  textDecoration: 'underline',
                },
                '& ul, & ol': {
                  pl: 3,
                  mb: 3,
                },
                '& li': {
                  mb: 1,
                  lineHeight: 1.8,
                },
                '& blockquote': {
                  borderLeft: `4px solid ${palette.secondary.main}`,
                  pl: 3,
                  py: 1,
                  my: 3,
                  backgroundColor: palette.background.paper,
                  borderRadius: '0 8px 8px 0',
                },
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>

          <Divider sx={{ my: 6 }} />

          {/* フッター */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: palette.text.light, mb: 3 }}>
              最後までお読みいただきありがとうございます。
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/contact')}
              sx={{
                backgroundColor: palette.primary.main,
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: palette.primary.light,
                },
              }}
            >
              無料相談を申し込む
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
