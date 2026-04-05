export interface NavItem {
  label: string;
  path: string;
}

export const navigationItems: NavItem[] = [
  { label: 'ホーム', path: '/' },
  { label: '私たちについて', path: '/about' },
  { label: 'サービス', path: '/service' },
  { label: 'ブログ', path: '/blog' },
  { label: 'お問い合わせ', path: '/contact' },
];
