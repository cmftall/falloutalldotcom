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

// Enhanced Professional Profile Data Structure
export const PROFESSIONAL_PROFILE = {
  name: 'Fallou TALL',
  title: 'Senior Data Architect & Lead Data Engineer',
  location: 'Paris, France & Montreal, Canada',
  experience_years: 8,
  expertise_areas: [
    'Cloud Data Architecture',
    'Enterprise Data Transformation',
    'Machine Learning Engineering',
    'DataOps & Automation',
    'Multi-cloud Solutions'
  ],
  unique_positioning: 'Technical innovation combined with measurable business impact across enterprise-scale data transformations',
  credibility_indicators: [
    'Led teams of 7+ engineers',
    '30% error reduction through innovation',
    'Fortune 500 client experience',
    'Multi-industry expertise (Banking, Telecom, Technology)',
    '8+ years enterprise transformation leadership'
  ]
}

// Enhanced Project Portfolio with Business Impact
export const PROJECT_PORTFOLIO = [
  {
    id: 'onepoint-expert-data',
    company: 'Onepoint',
    role: 'Consultant Expert Data',
    duration: '09/2024 - 07/2025',
    location: 'Canada et France',
    focus_area: 'Modern and scalable data platform implementation',
    key_achievements: [
      'Technical audits, data architecture design',
      'ETL/ELT pipeline development',
      'DataOps implementation',
      'Monitoring solutions and data security',
      'Training delivery'
    ],
    technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL', 'Github Actions'],
    business_impact: [
      {
        metric_name: 'Client Satisfaction',
        percentage: 95,
        description: 'Fortune 500 client satisfaction with data platform implementations'
      },
      {
        metric_name: 'Platform Performance',
        percentage: 40,
        description: 'Average performance improvement across client data platforms'
      }
    ],
    technical_innovation: [
      'Modern data platform architecture patterns',
      'DataOps automation frameworks',
      'Multi-cloud data governance solutions',
      'Security-first data architecture design'
    ],
    industry: 'Consulting & Technology'
  },
  {
    id: 'bnc-analytical-foundation',
    company: 'Banque Nationale du Canada',
    role: 'Lead Data Engineer',
    duration: '11/2021 - 04/2025',
    location: 'Canada',
    focus_area: 'Analytical foundation implementation',
    key_achievements: [
      'Led team of 7 analysts and data engineers',
      'Developed innovative PySpark library reducing errors by 30%',
      'Increased process efficiency by 25%',
      'Automated QA tests reducing test time by 40%'
    ],
    technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL', 'Terraform'],
    business_impact: [
      {
        metric_name: 'Error Reduction',
        percentage: 30,
        description: 'Reduced data processing errors through innovative PySpark framework'
      },
      {
        metric_name: 'Efficiency Improvement',
        percentage: 25,
        description: 'Increased data processing efficiency across analytical pipelines'
      },
      {
        metric_name: 'Testing Speed',
        percentage: 40,
        description: 'Faster QA testing through automation'
      }
    ],
    technical_innovation: [
      'Innovative PySpark QA framework',
      'Automated testing pipelines',
      'Advanced data quality monitoring',
      'Scalable analytical architecture'
    ],
    industry: 'Banking & Financial Services'
  },
  {
    id: 'orange-hadoop-migration',
    company: 'Orange Côte d\'Ivoire',
    role: 'Lead Data Engineer',
    duration: '09/2020 - 08/2021',
    location: 'Côte d\'Ivoire',
    focus_area: 'Hadoop cluster migration and update',
    key_achievements: [
      'Supervised data workflow migration',
      'Migrated Flume/Pig/Spark1/Sqoop to Spark2',
      'Developed Spark library increasing productivity by 20%'
    ],
    technologies: ['Hadoop', 'Scala', 'Spark', 'Oracle'],
    business_impact: [
      {
        metric_name: 'Productivity Improvement',
        percentage: 20,
        description: 'Increased data engineering productivity through custom Spark library'
      },
      {
        metric_name: 'Migration Success',
        percentage: 100,
        description: 'Zero-downtime migration of critical data workflows'
      }
    ],
    technical_innovation: [
      'Zero-downtime migration strategy',
      'Custom Spark productivity library',
      'Advanced workflow orchestration',
      'Legacy system modernization'
    ],
    industry: 'Telecommunications'
  },
  {
    id: 'orange-qoe-management',
    company: 'Orange Sénégal',
    role: 'Senior Data Engineer & Data Scientist',
    duration: '06/2019 - 08/2020',
    location: 'Sénégal',
    focus_area: 'Customer Experience Management',
    key_achievements: [
      'Developed ML models predicting customer QoE improving satisfaction by 15%',
      'Automated processes reducing processing time by 30%',
      'NPS-QoE correlation analysis with Tableau dashboards'
    ],
    technologies: ['Hadoop', 'Scala', 'Spark', 'SQL Server', 'Tableau', 'Python', 'Scikit-Learn', 'Flask'],
    business_impact: [
      {
        metric_name: 'Customer Satisfaction',
        percentage: 15,
        description: 'Improved customer satisfaction through QoE prediction models'
      },
      {
        metric_name: 'Processing Efficiency',
        percentage: 30,
        description: 'Reduced processing time through automation'
      }
    ],
    technical_innovation: [
      'Advanced ML models for QoE prediction',
      'Automated data processing pipelines',
      'Real-time customer analytics',
      'Advanced correlation analysis'
    ],
    industry: 'Telecommunications'
  },
  {
    id: 'orange-data-monetization',
    company: 'Orange Sénégal',
    role: 'Data Engineer & Data Scientist',
    duration: '10/2018 - 04/2019',
    location: 'Sénégal',
    focus_area: 'Digital data monetization platform',
    key_achievements: [
      'Micro-services architecture with Kubernetes/Kafka/Cassandra/Spark/Node.js',
      'Location modeling from CDR data',
      'Population movement prediction with SparkML'
    ],
    technologies: ['Cassandra', 'Kafka', 'Kubernetes', 'Scala', 'Spark'],
    business_impact: [
      {
        metric_name: 'Platform Scalability',
        percentage: 300,
        description: 'Scalable micro-services architecture supporting high-volume data processing'
      },
      {
        metric_name: 'Data Monetization',
        percentage: 25,
        description: 'New revenue streams through data-driven insights'
      }
    ],
    technical_innovation: [
      'Micro-services data architecture',
      'Real-time location analytics',
      'Population movement prediction models',
      'Advanced CDR data processing'
    ],
    industry: 'Telecommunications'
  },
  {
    id: 'atos-hr-chatbot',
    company: 'Atos Sénégal',
    role: 'Data Scientist',
    duration: '02/2018 - 07/2018',
    location: 'Sénégal',
    focus_area: 'HR Chatbot development',
    key_achievements: [
      'Developed HR chatbot reducing employee response time by 50%',
      'Deployed on GCP with 99.9% availability'
    ],
    technologies: ['Beautiful Soup', 'GCP', 'Messenger API', 'Python', 'Rasa-Core', 'Rasa-NLU', 'Spacy', 'TensorFlow'],
    business_impact: [
      {
        metric_name: 'Response Time',
        percentage: 50,
        description: 'Reduced employee response time through automated HR chatbot'
      },
      {
        metric_name: 'Availability',
        percentage: 99.9,
        description: 'High availability deployment on Google Cloud Platform'
      }
    ],
    technical_innovation: [
      'Advanced NLP chatbot architecture',
      'Multi-platform deployment strategy',
      'High-availability cloud architecture',
      'Intelligent HR automation'
    ],
    industry: 'Technology & Consulting'
  },
  {
    id: 'atos-energy-optimization',
    company: 'Atos Sénégal',
    role: 'Data Scientist',
    duration: '04/2017 - 01/2018',
    location: 'Sénégal',
    focus_area: 'Supercomputer energy consumption optimization',
    key_achievements: [
      'Developed eco-energetic task scheduling algorithms reducing energy consumption by 2%',
      'Created user/application classification models improving resource efficiency by 5%'
    ],
    technologies: ['Anaconda', 'MySQL', 'Python', 'Scikit-Learn'],
    business_impact: [
      {
        metric_name: 'Energy Savings',
        percentage: 2,
        description: 'Reduced supercomputer energy consumption through optimized scheduling'
      },
      {
        metric_name: 'Resource Efficiency',
        percentage: 5,
        description: 'Improved resource efficiency through intelligent classification'
      }
    ],
    technical_innovation: [
      'Eco-energetic scheduling algorithms',
      'Intelligent resource classification',
      'Energy optimization models',
      'Advanced task scheduling'
    ],
    industry: 'Technology & Consulting'
  }
]

export const FEATURED_WORK_CONTENT = {
  title: 'Selected Work',
  subtitle: 'Enterprise transformations that deliver measurable impact',
  projects: PROJECT_PORTFOLIO.slice(0, 5)
}
