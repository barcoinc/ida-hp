import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid2 as Grid,
  Skeleton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '../hooks/useScrollAnimation';
import { palette } from '../theme/palette';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/note');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* ヘッダーセクション */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 10, md: 14 },
          backgroundColor: palette.background.warm,
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body2"
                sx={{
                  color: palette.secondary.main,
                  letterSpacing: '0.15em',
                  mb: 3,
                  fontWeight: 500,
                }}
              >
                BLOG
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.6rem', md: '2.2rem' },
                  color: palette.text.primary,
                  mb: 3,
                }}
              >
                健康コラム
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  color: palette.text.secondary,
                  maxWidth: 560,
                  mx: 'auto',
                }}
              >
                予防医学の視点から、
                <br />
                日々の健康に役立つ情報をお届けします。
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* 記事一覧 */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Grid container spacing={4}>
            {loading
              ? // ローディング表示
                Array.from({ length: 3 }).map((_, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <Card sx={{ height: '100%' }}>
                      <Skeleton variant="rectangular" height={200} />
                      <CardContent>
                        <Skeleton variant="text" height={32} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" width="60%" />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : // 記事カード
                posts.map((post, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={post.id}>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportConfig}
                      custom={index}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 12px 32px rgba(26,39,68,0.12)',
                          },
                        }}
                      >
                        <CardActionArea
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={post.thumbnail}
                            alt={post.title}
                            sx={{ objectFit: 'cover' }}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography
                              variant="caption"
                              sx={{
                                color: palette.text.light,
                                display: 'block',
                                mb: 1,
                              }}
                            >
                              {formatDate(post.publishedAt)}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                color: palette.text.primary,
                                fontWeight: 500,
                                mb: 1.5,
                                fontSize: '1rem',
                                lineHeight: 1.6,
                              }}
                            >
                              {post.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: palette.text.secondary,
                                lineHeight: 1.8,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {post.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
          </Grid>

          {/* 記事がない場合 */}
          {!loading && posts.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: palette.text.secondary }}>
                記事の準備中です。しばらくお待ちください。
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
