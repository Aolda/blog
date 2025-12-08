import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '아올다 블로그',
  description: '아주대학교 클라우드 운영 소학회 아올다의 블로그입니다.',
  href: 'https://blog.aoldacloud.com',
  author: 'aolda',
  locale: 'ko-KR',
  featuredPostCount: 3,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '블로깅',
  },
  {
    href: '/authors',
    label: '구성원',
  },
  {
    href: '/about',
    label: '아올다',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://git.ajou.ac.kr/aolda',
    label: 'GitLab',
  },
  {
    href: 'mailto:ajou.aolda@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/company/aolda-cloud',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  GitLab: 'lucide:gitlab',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
