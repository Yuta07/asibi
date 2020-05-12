export type ExperienceType = {
  period: string;
  role: string;
  overview: string;
  language: string;
  devPeriod: string;
  company: string;
  image: string;
};

export const experiences: ExperienceType[] = [
  {
    period: '2019 - PRESENT',
    role: 'FRONTEND ENGINEER',
    overview: '飲食店のデータ分析プラットフォームの開発',
    language: 'React / Redux / TypeScript',
    devPeriod: 'SEPTEMBER 2019 - PRESENT',
    company: 'Lisa Technologies Inc.',
    image: '/job/storesscore.svg',
  },
  {
    period: '2019 - 2020',
    role: 'SYSTEM ENGINEER',
    overview: 'クラウドERPのカスタマイズ開発',
    language: 'Classic ASP / SQL Server',
    devPeriod: 'April 2019 - MAY 2020',
    company: 'oRo Co., Ltd.',
    image: '/job/cloud.svg',
  },
  {
    period: '2018 - 2019',
    role: 'FRONTEND ENGINEER <Internship>',
    overview: 'モバイルオーダーペイアプリのWeb管理画面の開発',
    language: 'React / Redux / Firebase',
    devPeriod: 'AUGUST 2018 - MARCH 2019',
    company: 'Lisa Technologies Inc.',
    image: '/job/togo.svg',
  },
];

export type PortfolioType = {
  category: string;
  title: string;
  overview: string;
  image: string;
};

export const portfolios: PortfolioType[] = [
  {
    category: 'NPM Package',
    title: 'frey-dates',
    overview: 'React Calendar NPM Package',
    image: '/portfolio/frey-dates.svg',
  },
  {
    category: 'Storybook',
    title: 'nino-ui',
    overview: 'React Flat UI storybook',
    image: '/portfolio/nino.svg',
  },
  {
    category: 'Blog',
    title: 'Pigmon.io',
    overview: 'Personal blog by Yutaka Miyazaki',
    image: '/portfolio/blog.svg',
  },
  {
    category: 'Portfolio',
    title: 'Yutazon.me',
    overview: 'Portfolio by Yutaka Miyazaki',
    image: '/portfolio/portfolio.svg',
  },
];
