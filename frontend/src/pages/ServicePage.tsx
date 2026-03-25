import { useRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { fadeInUp, staggerContainer, viewportConfig } from '../hooks/useScrollAnimation';
import { palette } from '../theme/palette';

const elegantEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideInItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: elegantEase },
  },
};

/* ── DATA ── */

const supportSteps = [
  { num: '01', title: '1時間の個別相談（無料）', text: '現在の体調、生活習慣、目標、不調の悩みなどを丁寧にヒアリングし、身体の状態を整理したうえで、改善の方向性を一緒に見つけていきます。' },
  { num: '02', title: '検査による身体の見える化', text: '自宅で実施できる検査キットを使用し、栄養状態、腸内環境、遺伝子情報など、感覚だけでは分からない身体の状態をデータとして把握します。' },
  { num: '03', title: 'あなた専用の体質改善プラン', text: '検査結果と生活習慣をもとに、体重を落としたい、慢性的な不調を改善したい、健康状態を維持したいなど、それぞれの目的に合わせた食事・栄養・生活習慣の改善プランを理由とともにご提案します。' },
  { num: '04', title: '3〜6ヶ月の継続マネジメント', text: '1ヶ月ごとに身体の状態を確認しながらプランの調整を行います。最終的には自分自身で身体を最高の状態に保てる「知識」と「習慣」を身につけることが目標です。' },
];

const fastingSteps = [
  { title: '4日間の専門ファスティング', text: '筋肉を守りながら脂肪を落とす「オプティマムファスティング」を指導します。' },
  { title: 'インナーケアを重視したプログラム', text: 'ホエイプロテイン、豆乳、甘酒などを組み合わせた専用ドリンクを使用し、必要な栄養を補いながら進めていきます。' },
  { title: '実施前後のカウンセリング', text: 'ファスティング前後にカウンセリングを行い、身体の状態を確認しながら無理のない形で取り組めるようサポートします。' },
];

interface Testimonial { quote: string; author: string; }

const testimonials1: Testimonial[] = [
  { quote: '体調の波が少なくなりました。仕事が忙しく慢性的な疲れを感じていましたが、栄養状態や生活習慣を見直していく中で体の軽さを感じるようになりました。', author: '40代・女性 経営者' },
  { quote: '長年悩んでいた生理痛が徐々に軽くなり、薬に頼らなくても過ごせるようになりました。疲れにくくなり、日常生活の質が大きく変わったと感じています。', author: '30歳・女性 会社員' },
];

const testimonials2: Testimonial[] = [
  { quote: 'ファスティング後は体が軽く感じられ、頭の中もスッキリした感覚がありました。仕事中の集中力も上がったと感じています。', author: '30代・男性 会社員' },
  { quote: '最初は不安もありましたが、丁寧にサポートしていただけたので安心して取り組めました。終了後は体が軽くなり、肌の調子も良くなりました。', author: '40代・女性 主婦' },
];

const testimonials3: Testimonial[] = [
  { quote: '断片的に聞いていた健康情報が整理され、なぜそれが大切なのかを理解できました。生活習慣を見直すきっかけになりました。', author: '40代・男性 経営者' },
  { quote: '難しい内容かと思いましたが、例え話も多く、楽しく理解することができました。日常生活ですぐに取り入れられる内容が多かったです。', author: '50代・女性 会社員' },
];

/* ── SUB COMPONENTS ── */

function TestimonialCards({ items }: { items: Testimonial[] }) {
  return (
    <Grid container spacing={3}>
      {items.map((t, i) => (
        <Grid size={{ xs: 12, md: 6 }} key={i}>
          <motion.div variants={fadeInUp} style={{ height: '100%' }}>
            <Box sx={{ p: 4, height: '100%', backgroundColor: '#fff', borderRadius: 1, border: `1px solid ${palette.accent.warmGray}` }}>
              <FormatQuoteIcon sx={{ color: palette.secondary.main, opacity: 0.3, fontSize: '2rem', mb: 1 }} />
              <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 1.9, mb: 2 }}>{t.quote}</Typography>
              <Typography variant="body2" sx={{ color: palette.text.light, fontSize: '0.8rem', letterSpacing: '0.04em' }}>— {t.author}</Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

function DiffPoint({ title, text }: { title: string; text: string }) {
  return (
    <motion.div variants={fadeInUp}>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Box sx={{ width: 4, flexShrink: 0, backgroundColor: palette.secondary.main, borderRadius: 2 }} />
        <Box>
          <Typography variant="h5" sx={{ mb: 0.5, fontSize: '0.95rem', color: palette.text.primary }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 1.8 }}>{text}</Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

/* ── PAGE ── */

export default function ServicePage() {
  const navigate = useNavigate();

  /* Scroll-zoom: 2 slides (Service title → approach overview) */
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
          {/* Back slide: service overview */}
          <Box
            sx={{
              position: 'absolute', inset: 0, zIndex: 1,
              bgcolor: palette.background.warm,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Container maxWidth="md">
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: { xs: '0.75rem', md: '0.875rem' }, color: palette.secondary.main, letterSpacing: '0.15em', mb: 2 }}>
                  Our Approach
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.75rem' }, fontWeight: 300, letterSpacing: '0.06em', color: palette.secondary.main, lineHeight: 1.8, mb: { xs: 3, md: 4 } }}>
                  検査データと科学的根拠をもとに
                  <br />
                  あなたの身体を最高の状態に
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, color: palette.text.secondary, letterSpacing: '0.08em', mb: { xs: 3, md: 4 }, lineHeight: 2 }}>
                  3つのサービスには こんな共通点があります
                </Typography>
                <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: { xs: 1.5, md: 2 } }}>
                  {[
                    '症状ではなく「最高の状態」を診る',
                    '感覚ではなく科学的根拠に基づく',
                    '一生使える知識が身につく',
                    '商品を売りたいわけじゃない',
                  ].map((item) => (
                    <Typography key={item} sx={{ fontSize: { xs: '0.8125rem', md: '0.9375rem' }, color: palette.text.primary, letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box component="span" sx={{ color: palette.secondary.main, fontSize: '0.875rem' }}>&#10003;</Box>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Container>
          </Box>

          {/* Front slide: big "Service" title — outer=opacity, inner=scale */}
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
                    Service
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: elegantEase }}>
                  <Typography sx={{ fontSize: { xs: '0.8125rem', md: '0.9375rem' }, fontWeight: 400, letterSpacing: '0.15em', color: palette.text.primary, mt: { xs: 3, md: 4 }, lineHeight: 1.8 }}>
                    予防医学コンシェルジュが提供する3つの価値
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1.2, delay: 0.8, ease: elegantEase }}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: { xs: '0.875rem', md: '1.0625rem' }, color: palette.secondary.main, mt: { xs: 1.5, md: 2 }, lineHeight: 1.6 }}>
                    Consultation, Fasting &amp; Seminar
                  </Typography>
                </motion.div>
                {/* Scroll indicator */}
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

      {/* ━━ SERVICE 1: 個別伴走サポート ━━ */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.div variants={fadeInUp}>
              <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: palette.secondary.main, fontWeight: 300, mb: 2, textAlign: 'center' }}>01</Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1.3rem', md: '1.7rem' } }}>個別伴走サポート</Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="body2" sx={{ textAlign: 'center', mb: 2, color: palette.text.light, letterSpacing: '0.06em' }}>体質改善プラン</Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="body1" sx={{ textAlign: 'center', mb: 8, color: palette.text.secondary, maxWidth: 640, mx: 'auto', lineHeight: 2 }}>
                一人ひとりの体質や生活習慣に合わせ、検査データと科学的根拠をもとに体質改善をサポートするプログラムです。単なる健康アドバイスではなく、継続的な伴走支援を通じて「自分で体調を整えられる身体」を目指します。
              </Typography>
            </motion.div>
            <Box sx={{ maxWidth: 720, mx: 'auto', mb: 8 }}>
              {supportSteps.map((s, i) => (
                <motion.div key={i} variants={slideInItem}>
                  <Box sx={{ display: 'flex', gap: { xs: 2.5, md: 4 }, py: 4, borderBottom: i < supportSteps.length - 1 ? `1px solid ${palette.divider}` : 'none' }}>
                    <Box sx={{ flexShrink: 0, width: { xs: 40, md: 56 } }}>
                      <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', color: palette.secondary.main, fontWeight: 300 }}>{s.num}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ mb: 1, fontSize: { xs: '1rem', md: '1.1rem' } }}>{s.title}</Typography>
                      <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 1.9 }}>{s.text}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
            <Box sx={{ mb: 6 }}>
              <motion.div variants={fadeInUp}><Typography variant="body2" sx={{ color: palette.secondary.main, letterSpacing: '0.12em', mb: 4, fontWeight: 500, textAlign: 'center', fontSize: '0.8rem' }}>VOICE</Typography></motion.div>
              <TestimonialCards items={testimonials1} />
            </Box>
            <Box sx={{ maxWidth: 640, mx: 'auto' }}>
              <DiffPoint title="症状ではなく「最高の状態」を診る" text="単に不調を改善することだけでなく、その人が本来持っているパフォーマンスを最大限に引き出すことを目的としています。" />
              <DiffPoint title="研究者としての科学的アプローチ" text="大手製薬会社での新薬開発の経験をもとに、感覚ではなく科学的根拠に基づいた身体づくりをサポートします。" />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ━━ SERVICE 2: ファスティング指導 ━━ */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.paper }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.div variants={fadeInUp}><Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: palette.secondary.main, fontWeight: 300, mb: 2, textAlign: 'center' }}>02</Typography></motion.div>
            <motion.div variants={fadeInUp}><Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1.3rem', md: '1.7rem' } }}>ファスティング指導</Typography></motion.div>
            <motion.div variants={fadeInUp}><Typography variant="body1" sx={{ textAlign: 'center', mb: 8, color: palette.text.secondary, maxWidth: 640, mx: 'auto', lineHeight: 2 }}>栄養学に基づいた安全なファスティングプログラムです。筋肉量をできるだけ維持しながら、効率よく脂肪を落とすことを目的としています。</Typography></motion.div>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {fastingSteps.map((s, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                    <Box sx={{ p: 4, height: '100%', backgroundColor: '#fff', borderRadius: 1, border: `1px solid ${palette.accent.warmGray}`, transition: 'all 0.5s ease', '&:hover': { borderColor: palette.secondary.main, transform: 'translateY(-4px)', boxShadow: '0 4px 20px rgba(26,39,68,0.06)' } }}>
                      <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', color: palette.secondary.main, fontWeight: 300, mb: 2 }}>{String(i + 1).padStart(2, '0')}</Typography>
                      <Typography variant="h4" sx={{ mb: 2, fontSize: '1rem' }}>{s.title}</Typography>
                      <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 1.9 }}>{s.text}</Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mb: 6 }}>
              <motion.div variants={fadeInUp}><Typography variant="body2" sx={{ color: palette.secondary.main, letterSpacing: '0.12em', mb: 4, fontWeight: 500, textAlign: 'center', fontSize: '0.8rem' }}>VOICE</Typography></motion.div>
              <TestimonialCards items={testimonials2} />
            </Box>
            <Box sx={{ maxWidth: 640, mx: 'auto' }}>
              <DiffPoint title="リバウンドしにくい知識が身につく" text="脂肪が落ちるメカニズムを理解しながら進めるため、終了後もリバウンドしにくい生活習慣を身につけることができます。" />
              <DiffPoint title="栄養学に基づいた安全なファスティング" text="必須脂肪酸、アミノ酸、ビタミンB群など必要な栄養素を補給しながら進めることで、安心して取り組めるプログラムです。" />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ━━ SERVICE 3: セミナー・講師活動 ━━ */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.div variants={fadeInUp}><Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: palette.secondary.main, fontWeight: 300, mb: 2, textAlign: 'center' }}>03</Typography></motion.div>
            <motion.div variants={fadeInUp}><Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1.3rem', md: '1.7rem' } }}>セミナー・講師活動</Typography></motion.div>
            <motion.div variants={fadeInUp}><Typography variant="body1" sx={{ textAlign: 'center', mb: 8, color: palette.text.secondary, maxWidth: 640, mx: 'auto', lineHeight: 2 }}>予防医学の考え方を、研究者ならではの視点で分かりやすく伝えるセミナーや講演を行っています。</Typography></motion.div>
            <motion.div variants={fadeInUp}>
              <Box
                component="img"
                src="/images/seminar.jpg"
                alt="セミナー・講演の様子"
                sx={{
                  width: '100%',
                  maxHeight: 360,
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 1,
                  mb: 6,
                }}
              />
            </motion.div>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {[
                { title: 'はじめての予防医学セミナー', text: '予防医学の基本的な考え方や、健康を守るための生活習慣について分かりやすく解説します。' },
                { title: '企業・団体向け講演', text: '社員の健康づくりに取り組む企業や、地域の健康促進を目指す団体向けに科学的根拠に基づいた健康メソッドをお届けします。' },
                { title: 'のべ200名以上の登壇実績', text: 'これまでの個別相談やセミナー経験をもとに、参加者の悩みに寄り添った具体的な解決策を提案しています。', num: '200+' },
              ].map((s, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <motion.div variants={fadeInUp} style={{ height: '100%' }}>
                    <Box sx={{ p: 4, height: '100%', backgroundColor: palette.background.paper, borderRadius: 1, border: `1px solid ${palette.accent.warmGray}` }}>
                      {s.num && <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', color: palette.secondary.main, fontWeight: 300, mb: 1 }}>{s.num}</Typography>}
                      <Typography variant="h4" sx={{ mb: 2, fontSize: '1rem' }}>{s.title}</Typography>
                      <Typography variant="body2" sx={{ color: palette.text.secondary, lineHeight: 1.9 }}>{s.text}</Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
            <Box>
              <motion.div variants={fadeInUp}><Typography variant="body2" sx={{ color: palette.secondary.main, letterSpacing: '0.12em', mb: 4, fontWeight: 500, textAlign: 'center', fontSize: '0.8rem' }}>VOICE</Typography></motion.div>
              <TestimonialCards items={testimonials3} />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ━━ 想い ━━ */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.dark, color: '#fff' }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} style={{ maxWidth: 680, margin: '0 auto' }}>
            <motion.div variants={fadeInUp}><Typography variant="body2" sx={{ color: palette.secondary.main, letterSpacing: '0.15em', mb: 3, fontWeight: 500, textAlign: 'center' }}>PHILOSOPHY</Typography></motion.div>
            <motion.div variants={fadeInUp}><Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '1.3rem', md: '1.7rem' }, color: '#fff', lineHeight: 1.8 }}>絶望をなくし、希望を灯したい。</Typography></motion.div>
            <motion.div variants={fadeInUp}>
              <Box sx={{ borderLeft: `2px solid ${palette.secondary.main}`, pl: 4, py: 1 }}>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 2 }}>私は以前、大手製薬会社で抗がん剤の開発に携わっていました。その中で、病気になってからでは思い描いていた人生を諦めざるを得ない人たちを数多く見てきました。</Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 2 }}>抗がん剤の世界では、「寿命が1年延びること」が画期的な成果と呼ばれることもあります。もちろん、その薬が必要な方もいます。しかし私は、その前の段階でできることがたくさんあると確信しています。</Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 2 }}>仕事を頑張り、家族のために生きてきた人が最後まで自分らしく動ける人生を送れるように。</Typography>
                <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem', lineHeight: 2 }}>「なぜ」が分かれば、身体は変わります。<br />あなたの専属コンシェルジュとして、一生モノの健康づくりをサポートしていきます。</Typography>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* ━━ CTA ━━ */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.background.warm, textAlign: 'center' }}>
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} style={{ maxWidth: 600, margin: '0 auto' }}>
            <motion.div variants={fadeInUp}><Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '1.3rem', md: '1.7rem' }, lineHeight: 1.8 }}>「少しでも健康を見直してみようかな」<br />と思ったなら、<br />ぜひ、話してみませんか。</Typography></motion.div>
            <motion.div variants={fadeInUp}><Typography variant="body1" sx={{ color: palette.text.secondary, mb: 6, lineHeight: 2 }}>突然、健康を失う。その「絶望」を味わう前に。<br />あなたの話を、聞かせてください。</Typography></motion.div>
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
