import { useRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '../hooks/useScrollAnimation';
import { palette } from '../theme/palette';

const elegantEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function AboutPage() {
  const navigate = useNavigate();

  /* Scroll-zoom: 2 slides (About title → founder message) */
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, (v) => {
    if (v <= 0.30) return 1;
    if (v >= 0.50) return 1.5;
    return 1 + 0.5 * ((v - 0.30) / 0.20);
  });
  const heroOpacity = useTransform(scrollYProgress, (v) => {
    if (v <= 0.30) return 1;
    if (v >= 0.475) return 0;
    return 1 - (v - 0.30) / 0.175;
  });

  return (
    <>
      {/* ── Scroll-zoom intro ── */}
      <Box ref={heroRef} sx={{ height: '320vh', position: 'relative' }}>
        <Box sx={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {/* Back slide: founder message */}
          <Box
            sx={{
              position: 'absolute', inset: 0, zIndex: 1,
              bgcolor: palette.background.warm,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 0 }, pb: { xs: 2, md: 0 } }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 38%' },
                  rowGap: { xs: 1.5, md: 2 },
                  columnGap: { xs: 0, md: 8 },
                  alignItems: { md: 'center' },
                }}
              >
                {/* Title */}
                <Box sx={{ order: { xs: 1, md: 1 } }}>
                  <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 300, letterSpacing: '0.08em', color: palette.text.primary, mb: { xs: 1, md: 1.5 } }}>
                    代表メッセージ
                  </Typography>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: { xs: '0.75rem', md: '0.875rem' }, color: palette.secondary.main, letterSpacing: '0.15em' }}>
                    Message from Founder
                  </Typography>
                </Box>

                {/* Name */}
                <Box sx={{ order: { xs: 2, md: 3 }, mt: { md: 3 } }}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '0.6875rem', color: palette.text.light, letterSpacing: '0.1em', opacity: 0.6 }}>
                    Founder
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, color: palette.text.primary, letterSpacing: '0.15em', mt: 0.5 }}>
                    井田 孝
                  </Typography>
                </Box>

                {/* Photo placeholder */}
                <Box
                  sx={{
                    order: { xs: 3 },
                    gridColumn: { md: '2 / 3' },
                    gridRow: { md: '1 / 4' },
                    width: { xs: '65%', md: '100%' },
                    mx: { xs: 'auto', md: 0 },
                    my: { xs: 1, md: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src="/images/profile-ida.png"
                    alt="井田 孝"
                    sx={{
                      width: '100%',
                      height: { xs: 200, md: '65vh' },
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                </Box>

                {/* Quote + text */}
                <Box sx={{ order: { xs: 4, md: 2 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.4rem', md: '1.6rem' },
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      color: palette.text.primary,
                      lineHeight: 1.8,
                      mb: { xs: 1.5, md: 4 },
                    }}
                  >
                    ある日突然、健康を失う
                    <br />
                    <Box component="span" sx={{ color: palette.secondary.main }}>「絶望」</Box>
                    を無くし
                    <br />
                    <Box component="span" sx={{ color: palette.secondary.main }}>「希望」</Box>
                    を灯したい
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.8125rem', md: '0.9375rem' },
                      color: palette.text.secondary,
                      lineHeight: { xs: 1.8, md: 2.2 },
                      letterSpacing: '0.08em',
                    }}
                  >
                    この想いを胸に、
                    <br />
                    予防医学の叡智をお届けしています。
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>

          {/* Front slide: big "About Us" title — outer=opacity, inner=scale */}
          <motion.div
            style={{
              opacity: heroOpacity,
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2,
            }}
          >
           <motion.div style={{ scale: heroScale, position: 'absolute', inset: 0, transformOrigin: 'center center' }}>
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: palette.background.default, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: elegantEase }}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: { xs: '2rem', sm: '2.5rem', md: 'clamp(2.5rem, 3.8vw, 3.25rem)' }, fontWeight: 300, letterSpacing: '0.04em', color: palette.text.primary, lineHeight: 1.4 }}>
                    About Us
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: elegantEase }}>
                  <Typography sx={{ fontSize: { xs: '0.8125rem', md: '0.9375rem' }, fontWeight: 400, letterSpacing: '0.15em', color: palette.text.primary, mt: { xs: 3, md: 4 }, lineHeight: 1.8 }}>
                    私たちについて
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1.2, delay: 0.8, ease: elegantEase }}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: { xs: '0.875rem', md: '1.0625rem' }, color: palette.secondary.main, mt: { xs: 1.5, md: 2 }, lineHeight: 1.6 }}>
                    Our story and philosophy
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.3 }} style={{ position: 'absolute', bottom: -120, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Typography sx={{ fontSize: '0.5625rem', letterSpacing: '0.25em', color: palette.text.light, opacity: 0.35 }}>SCROLL</Typography>
                  <motion.div initial={{ scaleY: 0, transformOrigin: 'top' }} animate={{ scaleY: [0, 1, 1, 0], transformOrigin: ['top', 'top', 'bottom', 'bottom'] }} transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }} style={{ width: 1, height: 36, backgroundColor: palette.secondary.main, opacity: 0.3 }} />
                </motion.div>
              </Box>
            </Box>
           </motion.div>
          </motion.div>
        </Box>
      </Box>

      {/* ── Story: Pull quotes + narrative ── */}
      <Box sx={{ py: { xs: 12, md: 20 } }}>
        <Container maxWidth="md">
          <Box sx={{ maxWidth: 700, mx: 'auto' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }}>
              <Typography sx={{ fontSize: { xs: '1.3rem', md: '1.8rem' }, fontWeight: 300, letterSpacing: '0.06em', color: palette.secondary.main, lineHeight: 1.8, textAlign: 'center', mb: { xs: 6, md: 8 }, py: { xs: 4, md: 6 }, borderTop: `1px solid ${palette.divider}`, borderBottom: `1px solid ${palette.divider}` }}>
                そもそも、そんな状態にならない人を増やしたい。
                <br />
                前の段階で、できることが山ほどある。
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: elegantEase }}>
              <Typography sx={{ fontSize: { xs: '0.9375rem', md: '1.0625rem' }, lineHeight: 2.4, letterSpacing: '0.1em', color: palette.text.primary, fontWeight: 300, textAlign: 'center', mb: { xs: 8, md: 12 } }}>
                大手製薬会社で6年間、
                <br />
                抗がん剤の新薬開発に携わってきました。
                <br /><br />
                がんの苦しみを何とかできないか。
                <br />
                そんな思いで、膨大な論文を読み、研究を重ねてきた。
                <br /><br />
                でも現実は、10年で亡くなるはずだった人が
                <br />
                11年生きられた。
                <br />
                それが「画期的な成果」と呼ばれる世界。
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }}>
              <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.6rem' }, fontWeight: 300, letterSpacing: '0.06em', color: palette.text.primary, lineHeight: 1.8, textAlign: 'center', mb: { xs: 2, md: 3 }, pt: { xs: 4, md: 6 }, borderTop: `1px solid ${palette.divider}` }}>
                「なぜ」が分かれば、
                <br />
                <Box component="span" sx={{ color: palette.secondary.main }}>身体は変わります。</Box>
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9375rem', md: '1.0625rem' }, lineHeight: 2.4, letterSpacing: '0.1em', color: palette.text.secondary, fontWeight: 300, textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                あなたの専属コンシェルジュとして、
                <br />
                一生モノの健康づくりをサポートしていきます。
              </Typography>
            </motion.div>

            {/* Nav buttons */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 3, md: 5 } }}>
                <Button onClick={() => navigate('/service')} sx={{ color: palette.text.secondary, fontSize: '0.75rem', letterSpacing: '0.15em', transition: 'all 0.3s ease', '&:hover': { color: palette.primary.main, bgcolor: 'transparent' } }}>
                  VIEW SERVICE
                </Button>
                <Button onClick={() => navigate('/contact')} sx={{ color: palette.text.secondary, fontSize: '0.75rem', letterSpacing: '0.15em', transition: 'all 0.3s ease', '&:hover': { color: palette.primary.main, bgcolor: 'transparent' } }}>
                  CONTACT
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* ── Profile detail ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: palette.background.paper }}>
        <Container maxWidth="md">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.div variants={fadeInUp}>
              <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
                <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: { xs: '0.75rem', md: '0.875rem' }, color: palette.secondary.main, letterSpacing: '0.15em', mb: 2 }}>
                  Career &amp; Achievements
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 300, letterSpacing: '0.08em', color: palette.text.primary }}>
                  経歴・実績
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={6} sx={{ maxWidth: 800, mx: 'auto' }}>
              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div variants={slideInLeft}>
                  <Box
                    component="img"
                    src="/images/hero-main.jpg"
                    alt="井田 孝 研究室にて"
                    sx={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center', borderRadius: 1 }}
                  />
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <motion.div variants={slideInRight}>
                  <Typography variant="h3" sx={{ mb: 1, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>井田 孝</Typography>
                  <Typography variant="body2" sx={{ color: palette.text.light, mb: 4, letterSpacing: '0.04em' }}>
                    イダ タカシ ／ 予防医学士® ／ Onc Labo 代表
                  </Typography>

                  {[
                    { label: '学歴', value: '岐阜薬科大学大学院修了（薬学）' },
                    { label: '職歴', value: '大手製薬会社にて抗がん剤新薬開発（6年間）' },
                    { label: '論文', value: '国際学術誌 Advanced Synthesis & Catalysis 掲載（2014年）' },
                    { label: '学会', value: '日本薬学会・複数学会での研究発表実績' },
                    { label: '設立', value: '2025年5月 Onc Labo（オンクラボ）設立' },
                  ].map((row) => (
                    <Box key={row.label} sx={{ display: 'flex', py: 2, borderBottom: `1px solid ${palette.divider}`, '&:first-of-type': { borderTop: `1px solid ${palette.divider}` } }}>
                      <Typography sx={{ fontSize: '0.8rem', color: palette.secondary.main, letterSpacing: '0.1em', width: 80, flexShrink: 0 }}>{row.label}</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: palette.text.primary, lineHeight: 1.8 }}>{row.value}</Typography>
                    </Box>
                  ))}
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.warm, textAlign: 'center' }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} style={{ maxWidth: 600, margin: '0 auto' }}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '1.3rem', md: '1.7rem' }, lineHeight: 1.8 }}>
                「少しでも健康を見直してみようかな」<br />と思ったなら、<br />ぜひ、話してみませんか。
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button variant="contained" size="large" onClick={() => navigate('/contact')} sx={{ backgroundColor: palette.primary.main, px: 5, py: 1.5, transition: 'all 0.4s ease', '&:hover': { backgroundColor: palette.primary.light, transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(26,39,68,0.2)' } }}>
                まず1時間、話してみる（無料）
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
