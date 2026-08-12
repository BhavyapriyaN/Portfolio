// ─────────────────────────────────────────────────────────────
// Central content file. Update everything here — no need to
// touch component files to change your info later.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Bhavya Priya N',
  roleTags: ['Data Engineer', 'AWS', 'SQL', 'Python', 'Power BI'],
  intro:
    'I build scalable ETL pipelines and cloud cost analytics on AWS — turning raw usage data into automated FinOps dashboards and cost-optimization systems that teams rely on daily.',
  openToOpportunities: true,
  email: 'bhavyapriya127@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhavyapriya/',
  github: 'https://github.com/BhavyapriyaN',
  // Place your resume file in /public and update the filename below if it changes.
  resumeUrl: 'Bhavyapriya_N_Resume.pdf',
  location: 'Bangalore, India',
}

export const heroStats = [
  { value: '70%↓', label: 'ETL processing time reduction' },
  { value: '8+', label: 'Production Power BI dashboards shipped' },
  { value: '3 yrs', label: 'Cloud data engineering experience' },
  { value: '2', label: 'Active AWS & Microsoft certifications' },
]

export const about = {
  paragraphs: [
    "I'm a Data Engineer at Datagrokr Analytics with nearly three years of experience building cloud data infrastructure on AWS. My work centers on FinOps — ETL pipelines with Redshift, Glue, and Lambda, and cost-optimization tooling backed by Power BI dashboards.",
    "I hold AWS and Microsoft certifications in data engineering, and I'm looking to bring that same rigor to data platform teams.",
  ],
  facts: [
    { label: 'Role', value: 'Data Engineer' },
    { label: 'Company', value: 'Datagrokr Analytics' },
    { label: 'Location', value: 'Bangalore, India' },
    { label: 'Focus', value: 'Cloud & FinOps Data Eng.' },
    { label: 'Certified', value: 'AWS & Microsoft' },
  ],
}

export const experience = [
  {
    role: 'Data Engineer',
    company: 'Datagrokr Analytics Pvt. Ltd.',
    location: 'Bangalore, India',
    dates: 'Oct 2023 — Present',
    bullets: [
      'Designed and optimized scalable ETL pipelines on AWS Redshift, Glue, Athena, S3, Lambda, Step Functions, and DynamoDB.',
      'Reduced ELB processing time by over 70% (6–7 hours to under 2 hours) and cut EC2 processing to 10–15 minutes.',
      'Led the Chargeback reporting migration from CUR 1.0 to CUR 2.0, redesigning stored procedures and validating financial data.',
      'Built and deployed 8+ production Power BI dashboards for FinOps reporting using dynamic DAX and incremental refresh.',
      'Designed a Cost Anomaly Detection framework and configurable budget alert automation on Lambda, DynamoDB, and Athena.',
      'Developed AI-powered MCP Server solutions on Amazon Bedrock AgentCore Gateway for AI-assisted cost optimization.',
    ],
    tech: ['AWS', 'Redshift', 'Glue', 'Lambda', 'Power BI', 'DynamoDB'],
  },
  {
    role: 'Process Executive',
    company: 'Equiniti India',
    location: 'Chennai, India',
    dates: 'Jul 2022 — Dec 2022',
    bullets: [
      'Performed financial reconciliation and data validation using Excel, ensuring operational accuracy.',
    ],
    tech: [],
  },
]

export const skillGroups = [
  {
    title: 'Data Engineering',
    desc: 'Pipeline design & processing',
    skills: ['Python', 'SQL', 'PySpark', 'ETL', 'Data Modeling', 'Data Warehousing', 'Data Pipelines'],
  },
  {
    title: 'Cloud & AWS',
    desc: 'Infrastructure & platforms',
    skills: ['AWS', 'S3', 'Redshift', 'Glue', 'Athena', 'Lambda', 'DynamoDB', 'Oracle Cloud Infrastructure (OCI)', 'Microsoft Fabric'],
  },
  {
    title: 'Business Intelligence',
    desc: 'Analytics & reporting',
    skills: ['Power BI', 'DAX', 'Incremental Refresh', 'Drill-through', 'Bookmarks'],
  },
  {
    title: 'AI & Automation',
    desc: 'Emerging tooling',
    skills: ['LLMs', 'MCP Servers', 'AI Agents', 'RAG', 'Amazon Bedrock AgentCore Gateway'],
  },
  {
    title: 'DevOps & Tools',
    desc: 'Day-to-day workflow',
    skills: ['Git', 'Docker', 'Azure DevOps', 'VS Code'],
  },
]

// Selected engineering work, drawn directly from resume experience —
// no separate project list was provided, so these are real production
// initiatives rather than standalone repos.
export const projects = [
  {
    name: 'Cost Anomaly Detection Framework',
    tagline: 'FinOps · Statistics',
    description:
      'Evaluated Median + MAD, IQR, Percentile, and AWS-native approaches before deploying a production system with automated cost alerts.',
    tech: ['Python', 'AWS', 'Athena'],
  },
  {
    name: 'OCI Cost & Usage Integration Pipeline',
    tagline: 'ETL · Cross-cloud',
    description:
      'Automated pipeline with 6-hour scheduled refreshes handling schema evolution and ETL into Amazon Redshift for analytics-ready datasets.',
    tech: ['OCI', 'Redshift', 'ETL'],
  },
  {
    name: 'Budget Alert Automation',
    tagline: 'Automation · FinOps',
    description:
      'Configurable budget alerting using Lambda, DynamoDB, and Athena, eliminating manual monitoring with automated stakeholder notifications.',
    tech: ['Lambda', 'DynamoDB', 'Athena'],
  },
  {
    name: 'AI-Powered MCP Server for Cloud Cost',
    tagline: 'AI Agents · Bedrock',
    description:
      'MCP Server solutions integrated with Amazon Bedrock AgentCore Gateway and Lambda for org-wide AI-assisted cost optimization.',
    tech: ['MCP', 'Bedrock', 'Lambda'],
  },
  {
    name: 'CUR 1.0 → 2.0 Chargeback Migration',
    tagline: 'Data Migration · SQL',
    description:
      'Led migration of the Chargeback reporting system, redesigning stored procedures and validating financial data for production.',
    tech: ['SQL', 'AWS'],
  },
  {
    name: 'Cross-Region Disaster Recovery',
    tagline: 'Resilience · Redshift',
    description:
      'Implemented Redshift DR and automated S3 Batch Replication to improve cloud data resilience and business continuity.',
    tech: ['Redshift', 'S3'],
  },
]

// `url` links the card to the public credential. Leave it out (or empty)
// and the card renders as plain text instead of a link.
export const certifications = [
  {
    org: 'Amazon Web Services',
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    date: 'Feb 2024 – Feb 2027',
    // TODO: paste your Credly badge URL here to make this card clickable.
    url: '',
  },
  {
    org: 'Microsoft',
    name: 'Fabric Data Engineer Associate (DP-700)',
    date: 'Jun 2025 – Jun 2026',
    url: 'https://learn.microsoft.com/en-us/users/bhavyapriyan-0550/credentials/cddb8f865c1d3668',
  },
  {
    org: 'Microsoft',
    name: 'Power BI Data Analyst Associate (PL-300)',
    date: 'Dec 2024 – Dec 2026',
    url: 'https://learn.microsoft.com/en-us/users/bhavyapriyan-0550/credentials/dd99b8a5bc112925',
  },
]

export const awards = [
  {
    name: 'Grok Star',
    org: 'Datagrokr Analytics Pvt. Ltd.',
    detail: 'Outstanding work performance in Q1 2026',
    date: 'Apr 2026',
  },
]

export const education = [
  {
    degree: 'Post Graduate Program in Data Science & Engineering',
    institution: 'Great Learning',
    dates: 'Jan 2023 – Aug 2023',
  },
  {
    degree: 'Bachelor of Commerce',
    institution: 'Dr. MGR – Janaki College',
    dates: 'Jul 2019 – Jun 2022',
  },
]

// If you want to feature specific pinned repos with descriptions,
// add them here. Otherwise the GitHub section links to your profile only.
export const githubRepos = [
  // Example shape (uncomment and fill in with real repos when ready):
  // {
  //   name: 'aws-cost-anomaly-detector',
  //   description: 'Cost anomaly detection using statistical methods on AWS billing data.',
  //   tech: ['Python', 'AWS'],
  //   url: 'https://github.com/BhavyapriyaN/aws-cost-anomaly-detector',
  // },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
