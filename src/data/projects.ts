export interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  type: string;
  year: string;
  description?: string;
  role?: string;
  tech?: string[];
  brief?: string;
  processLog?: { date: string; task: string }[];
}

export const projects: Project[] = [
  {
    id: '1',
    index: '01',
    title: 'SPORTS_BRANDING_2024',
    client: 'NIKE_LAB',
    type: 'IDENTITY_SYS',
    year: '2024',
    description: 'A comprehensive visual identity system designed for the next generation of performance sports. The project focused on kinetic typography, modular grid systems, and high-contrast aesthetics to convey speed and precision.',
    role: 'LEAD_DESIGNER',
    tech: ['ADOBE_CC', 'WEBGL', 'FRAMER_MOTION'],
    brief: 'The objective was to create a future-proof identity for NIKE_LAB that blends performance engineering with digital-first aesthetics. The brief required a system that could live across physical installations and high-end digital platforms, maintaining a "systematic archive" feel while being highly energetic.',
    processLog: [
      { date: '2024-01-15', task: 'INITIAL_RESEARCH_AND_CONCEPTUALIZATION' },
      { date: '2024-02-02', task: 'GRID_SYSTEM_DEVELOPMENT_AND_TYPOGRAPHY_EXPLORATION' },
      { date: '2024-03-10', task: 'KINETIC_ANIMATION_PROTOTYPING_IN_WEBGL' },
      { date: '2024-04-20', task: 'SYSTEM_DOCUMENTATION_AND_FINAL_DELIVERY' },
    ],
  },
  {
    id: '2',
    index: '02',
    title: 'FULL_STACK_ARCHIVE',
    client: 'INTERNAL',
    type: 'WEB_APP',
    year: '2023',
  },
  {
    id: '3',
    index: '03',
    title: 'MOTION_SYSTEM_V2',
    client: 'TECH_CORP',
    type: 'ANIMATION',
    year: '2023',
  },
  {
    id: '4',
    index: '04',
    title: 'EXPERIMENTAL_WEB_24',
    client: 'DIGITAL_ART',
    type: 'INTERACTIVE',
    year: '2024',
  },
  {
    id: '5',
    index: '05',
    title: 'FINTECH_IDENTITY_REBRAND',
    client: 'NEXUS_BANK',
    type: 'BRANDING',
    year: '2023',
  },
  {
    id: '6',
    index: '06',
    title: 'AI_DASHBOARD_UX',
    client: 'SYNTH_AI',
    type: 'UI_UX_DESIGN',
    year: '2024',
  },
  {
    id: '7',
    index: '07',
    title: 'CYBER_EDITORIAL_V1',
    client: 'MAG_TECH',
    type: 'LAYOUT_DESIGN',
    year: '2023',
  },
  {
    id: '8',
    index: '08',
    title: 'DATA_VISUALIZATION_TOOL',
    client: 'METRICS_CO',
    type: 'DEVELOPMENT',
    year: '2024',
  },
  {
    id: '9',
    index: '09',
    title: 'FASHION_LOOKBOOK_23',
    client: 'MODERN_WEAR',
    type: 'EDITORIAL',
    year: '2023',
  },
  {
    id: '10',
    index: '10',
    title: 'CRYPTO_EXCHANGE_UI',
    client: 'BLOCK_TECH',
    type: 'PRODUCT_DESIGN',
    year: '2024',
  },
  {
    id: '11',
    index: '11',
    title: 'AUTOMOTIVE_CONFIGURATOR',
    client: 'VELO_MOTORS',
    type: 'INTERACTIVE_3D',
    year: '2023',
  },
  {
    id: '12',
    index: '12',
    title: 'MINIMAL_PORTFOLIO_V2',
    client: 'PERSONAL',
    type: 'WEB_DESIGN',
    year: '2024',
  },
];

