// Note: app screenshots are filed in public/images/${project.title}/

export type App = {
  title: string;
  subtitle?: string;
  abstract?: string;
};

const appProjects: { [key: string]: App } = {
  BytePair: {
    title: 'Byte-Pair Tokenization',
    subtitle: '(Web App)',
    abstract:
      'An interactive demo of byte-pair tokenization, implemented as a standalone web app. The app allows users to tokenize custom text (or a random Wikipedia summary) with a choice of tokenization strategy, and explore the token vocabulary and resulting tokenization.',
  },
  PocketChange: {
    title: 'PocketChange',
    subtitle: '(iOS)',
    abstract:
      'Application for engaging in the PocketChange digital neighbourhood marketplaces in Toronto. The app supports making and receiving payments, earning rewards, and participating in local contests.',
  },
  ClearCast: {
    title: 'ClearCast',
    subtitle: '(iOS)',
    abstract:
      'A minimalist weather app for iOS designed around one intuitive screen of daily and bi-hourly forecasts.',
  },
};

export default appProjects;
