import { NavItem, ContactInfo } from './types'

export const SITE_CONFIG = {
  name: 'Fallou TALL',
  title: 'Senior Data Architect & Lead Data Engineer',
  description: 'Passionate about leveraging data to create innovative, efficient, and scalable solutions. With over 8 years of experience leading complex data projects, migrations, and machine learning initiatives.',
  url: 'https://falloutall.com',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/cmftall',
    email: 'cmftall@gmail.com',
  },
}

export const CONTACT_INFO: ContactInfo = {
  email: 'cmftall@gmail.com',
  location: 'Paris, France & Montreal, Canada',
  languages: ['French', 'English', 'Wolof'],
  linkedin: 'https://www.linkedin.com/in/cmftall',
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
  subheadline: 'Senior Data Architect • 8+ years leading enterprise transformations',
  primaryCta: 'View My Work',
  secondaryCta: 'Get In Touch',
  credential: 'Data Architect • Paris, France et Montreal Canada',
}

export const ABOUT_CONTENT = {
  title: 'About',
  description: 'I transform enterprise data landscapes through innovative, scalable solutions.',
  highlights: [
    'Senior Data Architect with enterprise consulting experience',
    '8+ years across Banking, Telecom, and Technology sectors',
    'Achieved up to 30% reduction in data errors through innovative frameworks',
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
  title: 'Professional Certifications',
  subtitle: 'Industry-recognized certifications with verifiable credentials that validate technical expertise.',
  certifications: [
    {
      id: 'azure-data-engineer',
      name: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer/',
      note: 'Professional certification with verifiable credentials'
    },
    {
      id: 'gcp-data-engineer',
      name: 'Google Cloud Professional Data Engineer',
      issuer: 'Google',
      url: 'https://cloud.google.com/certification/data-engineer',
      note: 'Professional certification with verifiable credentials'
    },
    {
      id: 'databricks-developer',
      name: 'Databricks Certified Associate Developer for Apache Spark',
      issuer: 'Databricks',
      url: 'https://www.databricks.com/learn/certification/apache-spark-developer-associate',
      note: 'Professional certification with verifiable credentials'
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
    'Achieved up to 30% error reduction through innovation',
    'Large enterprise client experience',
    'Multi-industry expertise (Banking, Telecom, Technology)',
    '8+ years enterprise transformation leadership'
  ]
}

// Enhanced Project Portfolio with Business Impact
export const PROJECT_PORTFOLIO = [
  {
    id: 'sopra-steria-data-architect',
    company: 'Sopra Steria',
    role: 'Data Architect Transverse - DCOE',
    duration: '11/2025 - Present',
    location: 'France',
    focus_area: 'Transverse data architecture and center of excellence leadership',
    key_achievements: [
      'Leading data architecture center of excellence',
      'Cross-functional data platform strategy',
      'Enterprise data governance frameworks',
      'Technical leadership across multiple projects'
    ],
    technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL', 'Terraform'],
    business_impact: [
      {
        metric_name: 'Architecture Standardization',
        percentage: 100,
        description: 'Establishing enterprise-wide data architecture standards and best practices'
      }
    ],
    technical_innovation: [
      'Center of Excellence frameworks',
      'Enterprise data architecture patterns',
      'Cross-functional governance models',
      'Technical leadership methodologies'
    ],
    industry: 'Technology & Consulting'
  },
  {
    id: 'onepoint-expert-data',
    company: 'Onepoint',
    role: 'Consultant Expert Data',
    duration: '09/2024 - 10/2025 (Part-time 09/2024-04/2025 alongside BNC, then full contract until 10/2025)',
    location: 'Canada et France',
    focus_area: 'Modern and scalable data platform implementation',
    key_achievements: [
      'Technical audits and data architecture design',
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
        description: 'Achieved high client satisfaction with data platform implementations'
      },
      {
        metric_name: 'Platform Performance',
        percentage: 40,
        description: 'Achieved up to 40% performance improvement across client data platforms'
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
      'Developed innovative PySpark library achieving up to 30% error reduction',
      'Increased process efficiency by up to 25%',
      'Automated QA tests reducing test time by up to 40%'
    ],
    technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL', 'Terraform'],
    business_impact: [
      {
        metric_name: 'Error Reduction',
        percentage: 30,
        description: 'Achieved up to 30% reduction in data processing errors through innovative PySpark framework'
      },
      {
        metric_name: 'Efficiency Improvement',
        percentage: 25,
        description: 'Achieved up to 25% increase in data processing efficiency across analytical pipelines'
      },
      {
        metric_name: 'Testing Speed',
        percentage: 40,
        description: 'Achieved up to 40% faster QA testing through automation'
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
      'Developed Spark library achieving up to 20% productivity increase'
    ],
    technologies: ['Hadoop', 'Scala', 'Spark', 'Oracle'],
    business_impact: [
      {
        metric_name: 'Productivity Improvement',
        percentage: 20,
        description: 'Achieved up to 20% increase in data engineering productivity through custom Spark library'
      },
      {
        metric_name: 'Migration Success',
        percentage: 100,
        description: 'Successfully completed zero-downtime migration of critical data workflows'
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
      'Developed ML models predicting customer QoE achieving up to 15% satisfaction improvement',
      'Automated processes reducing processing time by up to 30%',
      'NPS-QoE correlation analysis with Tableau dashboards'
    ],
    technologies: ['Hadoop', 'Scala', 'Spark', 'SQL Server', 'Tableau', 'Python', 'Scikit-Learn', 'Flask'],
    business_impact: [
      {
        metric_name: 'Customer Satisfaction',
        percentage: 15,
        description: 'Achieved up to 15% improvement in customer satisfaction through QoE prediction models'
      },
      {
        metric_name: 'Processing Efficiency',
        percentage: 30,
        description: 'Achieved up to 30% reduction in processing time through automation'
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
        description: 'Achieved 3x scalability with micro-services architecture supporting high-volume data processing'
      },
      {
        metric_name: 'Data Monetization',
        percentage: 25,
        description: 'Enabled new revenue streams through data-driven insights'
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
      'Developed HR chatbot achieving up to 50% reduction in employee response time',
      'Deployed on GCP with 99.9% availability'
    ],
    technologies: ['Beautiful Soup', 'GCP', 'Messenger API', 'Python', 'Rasa-Core', 'Rasa-NLU', 'Spacy', 'TensorFlow'],
    business_impact: [
      {
        metric_name: 'Response Time',
        percentage: 50,
        description: 'Achieved up to 50% reduction in employee response time through automated HR chatbot'
      },
      {
        metric_name: 'Availability',
        percentage: 99.9,
        description: 'Achieved high availability deployment on Google Cloud Platform'
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
      'Developed eco-energetic task scheduling algorithms achieving up to 2% energy reduction',
      'Created user/application classification models achieving up to 5% resource efficiency improvement'
    ],
    technologies: ['Anaconda', 'MySQL', 'Python', 'Scikit-Learn'],
    business_impact: [
      {
        metric_name: 'Energy Savings',
        percentage: 2,
        description: 'Achieved up to 2% reduction in supercomputer energy consumption through optimized scheduling'
      },
      {
        metric_name: 'Resource Efficiency',
        percentage: 5,
        description: 'Achieved up to 5% improvement in resource efficiency through intelligent classification'
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
