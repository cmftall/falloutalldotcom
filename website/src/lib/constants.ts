import { NavItem, ContactInfo } from './types'

export const SITE_CONFIG = {
  name: 'Fallou TALL',
  title: 'Senior Data Architect & Lead Data Engineer',
  description: 'Passionate about leveraging data to create innovative, efficient, and scalable solutions. With over 8 years of experience leading complex data projects, migrations, and machine learning initiatives.',
  url: 'https://falloutall.com',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/cmftall',
    github: 'https://www.github.com/cmftall',
    email: 'cmftall@gmail.com',
  },
}

export const CONTACT_INFO: ContactInfo = {
  email: 'cmftall@gmail.com',
  phone: '+33 7 67 07 01 79',
  location: 'Paris, France & Montreal, Canada',
  languages: ['French', 'English', 'Wolof'],
  linkedin: 'https://www.linkedin.com/in/cmftall',
  github: 'https://www.github.com/cmftall',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Selected Projects', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_CONTENT = {
  headline: 'I architect data ecosystems that transform enterprises.',
  subheadline: 'Senior Data Architect at Sopra Steria • 8+ years leading enterprise transformations',
  primaryCta: 'View My Work',
  secondaryCta: 'Get In Touch',
  credential: 'Data Architect • Paris, France et Montreal Canada',
}

export const ABOUT_CONTENT = {
  title: 'About',
  description: 'I transform enterprise data landscapes through innovative, scalable solutions.',
  highlights: [
    'Leading Data Center of Excellence at Sopra Steria',
    '8+ years across Banking, Telecom, and Technology sectors',
    'Reduced data errors by 30% through innovative frameworks',
    'Led teams of up to 7 engineers delivering measurable impact',
  ],
  quote: 'The best data architecture is invisible — it empowers decisions without complexity.',
}

export const EXPERTISE_CONTENT = {
  title: 'Expertise',
  subtitle: 'Core competencies across the modern data stack',
  categories: [
    {
      name: 'Cloud Platforms',
      icon: 'Cloud',
      skills: ['Azure', 'AWS', 'Databricks', 'Snowflake', 'Apache Spark'],
    },
    {
      name: 'Data Engineering',
      icon: 'Code',
      skills: ['Python', 'Scala', 'SQL', 'Apache Airflow', 'Terraform'],
    },
    {
      name: 'Machine Learning',
      icon: 'Brain',
      skills: ['Scikit-Learn', 'TensorFlow', 'Pandas', 'NumPy', 'MLflow'],
    },
    {
      name: 'Databases',
      icon: 'Database',
      skills: ['PostgreSQL', 'Oracle', 'Cassandra', 'MongoDB', 'Delta Lake'],
    },
    {
      name: 'Visualization',
      icon: 'BarChart',
      skills: ['Tableau', 'Power BI', 'Jupyter', 'Streamlit', 'Plotly'],
    },
    {
      name: 'DevOps',
      icon: 'Settings',
      skills: ['GitHub Actions', 'Azure DevOps', 'Docker', 'Kubernetes', 'DataOps'],
    },
  ]
}

export const EDUCATION_CONTENT = {
  title: 'Education Background',
  subtitle: 'Academic foundation in mathematical sciences and big data technologies',
  education: [
    {
      id: 'aims-masters-bigdata',
      degree: 'Master Coopératif en Sciences Mathématiques - spécialisation Big Data',
      institution: 'African Institute for Mathematical Sciences (AIMS)',
      location: 'Sénégal',
      duration: '2016-2018',
      year: '2018',
      description: 'Cooperative Master program specializing in Big Data technologies, statistical analysis, and machine learning. Completed industry projects focusing on data architecture, analytics, and real-world applications of mathematical sciences in data engineering.'
    },
    {
      id: 'ucad-masters-applied',
      degree: 'Master in Applied Mathematics',
      institution: 'Université Cheikh Anta Diop',
      location: 'Dakar, Sénégal',
      duration: '2014-2016',
      year: '2016',
      description: 'Advanced studies in applied mathematics with focus on mathematical modeling, statistical analysis, and computational methods. Specialized in optimization theory, numerical analysis, and mathematical applications in data science.'
    },
    {
      id: 'ucad-bachelors',
      degree: 'Bachelor in Mathematics',
      institution: 'Université Cheikh Anta Diop',
      location: 'Dakar, Sénégal',
      duration: '2009-2013',
      year: '2013',
      description: 'Foundation in mathematical sciences, statistics, and analytical thinking. Focused on mathematical modeling, calculus, linear algebra, and probability theory that provides a strong analytical foundation for data science and engineering.'
    }
  ]
}

export const CERTIFICATIONS_CONTENT = {
  title: 'Certifications & Credentials',
  subtitle: 'Professional certifications that validate my technical expertise and commitment to continuous learning.',
  certifications: [
    {
      id: 'azure-data-engineer',
      name: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer/'
    },
    {
      id: 'gcp-data-engineer',
      name: 'Google Cloud Professional Data Engineer',
      issuer: 'Google',
      url: 'https://cloud.google.com/certification/data-engineer'
    },
    {
      id: 'databricks-developer',
      name: 'Databricks Certified Associate Developer for Apache Spark',
      issuer: 'Databricks',
      url: 'https://www.databricks.com/learn/certification/apache-spark-developer-associate'
    },
    {
      id: 'deep-learning',
      name: 'Deep Learning Specialization',
      issuer: 'deeplearning.ai',
      url: 'https://www.coursera.org/specializations/deep-learning'
    },
    {
      id: 'databricks-developer-essentials',
      name: 'Databricks Developer Essentials',
      issuer: 'Databricks',
      url: 'https://www.databricks.com/learn/certification/developer-essentials'
    },
    {
      id: 'databricks-developer-foundations',
      name: 'Databricks Developer Foundations',
      issuer: 'Databricks',
      url: 'https://www.databricks.com/learn/certification/developer-foundations'
    },
    {
      id: 'deeplearning-ai-data-engineering',
      name: 'DeepLearning.AI Data Engineering Professional Certificate',
      issuer: 'DeepLearning.AI',
      url: 'https://www.coursera.org/professional-certificates/data-engineering'
    }
  ]
}

export const FEATURED_WORK_CONTENT = {
  title: 'Selected Work',
  subtitle: 'Enterprise transformations that deliver measurable impact',
  projects: [
    {
      id: 'sopra-steria-dcoe',
      company: 'Sopra Steria',
      role: 'Data Architect',
      description: 'Leading a team within the Data Center of Excellence across 8+ client sectors including Banking, Insurance, and Telecom.',
      impact: 'Multi-cloud architecture • TB+ data processing • Cross-industry compliance',
      technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Terraform', 'Snowflake'],
      duration: '2025 - Present',
      featured: true,
    },
    {
      id: 'bnc-data-pipeline',
      company: 'Banque Nationale du Canada',
      role: 'Lead Data Engineer',
      description: 'Led team of 7 engineers building robust analytical pipelines with innovative PySpark QA frameworks.',
      impact: '30% error reduction • 25% efficiency improvement • 40% faster testing',
      technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL'],
      duration: '2021 - 2025',
      featured: true,
    },
    {
      id: 'onepoint-consultant',
      company: 'Onepoint',
      role: 'Consultant Expert Data',
      description: 'Delivered technical, organizational, and governance audits for enterprise data platforms across Canada and France. Designed modern, scalable architectures for Fortune 500 companies.',
      impact: 'Fortune 500 clients • DataOps automation • Security compliance • Performance optimization',
      technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL', 'GitHub Actions'],
      duration: '2024 - 2025',
      featured: true,
    },
    {
      id: 'orange-migration',
      company: 'Orange Côte d\'Ivoire',
      role: 'Lead Data Engineer',
      description: 'Led zero-downtime migration of data workflows to new Hadoop cluster. Developed productivity tools and orchestrated complex data pipelines.',
      impact: 'Zero-downtime migration • 20% productivity improvement • Spark2 upgrade • Oozie orchestration',
      technologies: ['Hadoop', 'Scala', 'Spark', 'Flume', 'Pig', 'Sqoop', 'Oozie'],
      duration: '2020 - 2021',
      featured: true,
    },
    {
      id: 'orange-qoe',
      company: 'Orange Sénégal',
      role: 'Senior Data Engineer & Data Scientist',
      description: 'Developed ML models for customer experience management and QoE prediction.',
      impact: '15% customer satisfaction improvement • 30% processing time reduction',
      technologies: ['Hadoop', 'Scala', 'Spark', 'Python', 'Scikit-Learn', 'Tableau'],
      duration: '2019 - 2020',
      featured: true,
    },
  ]
}
