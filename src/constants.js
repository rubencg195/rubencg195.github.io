// Configuration constants
export const ENABLE_LINKEDIN_PARSING = false; // Disable LinkedIn parsing by default
export const ENABLE_GITHUB_API = true; // Enable GitHub API to fetch live project data from repositories
export const ENABLE_FIREBASE_DEBUG = false; // Enable Firebase debugging tools in console

// GitHub repository URLs
export const GITHUB_REPOS = [
  'https://github.com/rubencg195/aws-langchain-web-and-database-search',
  'https://github.com/rubencg195/aws-nvidia-dgl-gnn-xgboost',
  'https://github.com/rubencg195/gitLab-sagemaker-cicd-for-ml-training-and-hosting',
  'https://github.com/rubencg195/aws-backend-frontend-behind-cognito-auth-cloudfront',
  'https://github.com/rubencg195/aws-website-hosting-user-auth-cognito',
  'https://github.com/rubencg195/aws-mcp-databases-bedrock-unstructured-vector-db',
  'https://github.com/rubencg195/aws-bedrock-agents-structured-db',
  'https://github.com/rubencg195/rl-training-quadruped-robot-pybullet-openai-gym'
];

// Fallback project data for when GitHub API is unavailable
export const PROJECTS_FALLBACK = [
  {
    id: 'aws-langchain-web-and-database-search',
    name: 'AWS LangChain Web and Database Search with Bedrock',
    description: 'A production-ready serverless application that combines web search and database retrieval with AI-powered summarization using AWS Bedrock Claude Haiku and LangChain. The application is deployed on AWS ECS Fargate using OpenTofu/Terraform.',
    html_url: 'https://github.com/rubencg195/aws-langchain-web-and-database-search',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform', 'HCL'],
    topics: ['aws', 'bedrock', 'claude', 'langchain', 'ecs-fargate', 'opentofu', 'terraform', 'dynamodb', 'serverless', 'ai', 'web-search', 'database-retrieval', 'mlops'],
    updated_at: '2025-10-25T00:00:00Z',
    icon: '🧠'
  },
  {
    id: 'aws-nvidia-dgl-gnn-xgboost',
    name: 'AWS NVIDIA DGL GNN XGBoost - Fraud Detection Pipeline',
    description: 'Production-grade ML infrastructure leveraging NVIDIA GPU containers with Graph Neural Networks (cuGraph, DGL) and XGBoost for IEEE fraud detection. Comprehensive OpenTofu automation for SageMaker training jobs, ECR registry management, and end-to-end MLOps pipeline with wrapper scripts and training snapshots.',
    html_url: 'https://github.com/rubencg195/aws-nvidia-dgl-gnn-xgboost',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform', 'Shell', 'Jupyter Notebook'],
    topics: ['aws', 'sagemaker', 'nvidia', 'gpu', 'gnn', 'xgboost', 'fraud-detection', 'opentofu', 'terraform', 'ml-infrastructure', 'docker', 'ecr', 'mlops', 'graph-neural-networks', 'cuGraph', 'dgl', 'ieee-dataset'],
    updated_at: '2025-10-22T00:00:00Z',
    icon: '🧠'
  },
  {
    id: 'gitLab-sagemaker-cicd-for-ml-training-and-hosting',
    name: 'GitLab SageMaker CI/CD for ML Training and Hosting',
    description: 'Comprehensive MLOps solution for automated machine learning workflows with GitLab CI/CD, AWS SageMaker training jobs, artifact management, and monitoring.',
    html_url: 'https://github.com/rubencg195/gitLab-sagemaker-cicd-for-ml-training-and-hosting',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'sagemaker', 'gitlab-ci', 'mlops', 'cicd', 'terraform', 'python/terraform', 'shell', 'hcl', 'machine-learning', 'devops'],
    updated_at: '2025-09-01T00:00:00Z',
    icon: '🧠'
  },
  {
    id: 'aws-backend-frontend-behind-cognito-auth-cloudfront',
    name: 'AWS Backend/Frontend + Cognito Auth',
    description: 'Demonstrate how to protect a backend and frontend on AWS behind Cognito authentication',
    html_url: 'https://github.com/rubencg195/aws-backend-frontend-behind-cognito-auth-cloudfront',
    stargazers_count: 12,
    forks_count: 3,
    language: ['Tailwind', 'Javascript', 'HTML', 'Terraform'],
    topics: ['aws', 'cognito', 'cloudfront', 'lambda', 'react', 'tailwind', 'javascript', 'html', 'terraform'],
    updated_at: '2024-01-15T10:30:00Z',
    icon: '☁️'
  },
  {
    id: 'aws-website-hosting-user-auth-cognito',
    name: 'AWS Hosting Comparison + Cognito Auth',
    description: 'Amplify vs S3+CloudFront vs Elastic Beanstalk',
    html_url: 'https://github.com/rubencg195/aws-website-hosting-user-auth-cognito',
    stargazers_count: 8,
    forks_count: 2,
    language: ['Tailwind', 'Javascript', 'HTML', 'Terraform'],
    topics: ['aws', 'cognito', 's3', 'cloudfront', 'react', 'elastic-bean', 'amplify', 'tailwind', 'javascript', 'html', 'terraform'],
    updated_at: '2024-02-10T14:20:00Z',
    icon: '☁️'
  },
  {
    id: 'aws-mcp-databases-bedrock-unstructured-vector-db',
    name: 'AWS Bedrock Vector Database with Knowledge Bases',
    description: 'Complete MLOps infrastructure for unstructured data retrieval using AWS Bedrock Knowledge Bases, RDS PostgreSQL with pgvector, and Claude 3.7 for intelligent document processing and RAG applications',
    html_url: 'https://github.com/rubencg195/aws-mcp-databases-bedrock-unstructured-vector-db',
    stargazers_count: 25,
    forks_count: 7,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'bedrock', 'claude', 'postgresql', 'pgvector', 'knowledge-bases', 'terraform', 'lambda', 's3', 'rds'],
    updated_at: '2024-03-05T09:15:00Z',
    icon: '🧠'
  },
  {
    id: 'aws-bedrock-agents-structured-db',
    name: 'AWS Bedrock Agents with Structured Data',
    description: 'Intelligent data retrieval system using AWS Bedrock Agents and Claude 3.7 for querying structured databases through Athena, enabling natural language interactions with SQL data',
    html_url: 'https://github.com/rubencg195/aws-bedrock-agents-structured-db',
    stargazers_count: 18,
    forks_count: 5,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'bedrock', 'claude', 'athena', 'bedrock-agents', 'sql', 'terraform', 'structured-data', 'nlp'],
    updated_at: '2024-03-12T16:45:00Z',
    icon: '🧠'
  },
  {
    id: 'rl-training-quadruped-robot-pybullet-openai-gym',
    name: 'RL Training for Quadruped Robot Locomotion with PyBullet and OpenAI Gym',
    description: 'Train a simulated 4-legged spider robot to walk using reinforcement learning (PPO). Uses PyBullet for physics simulation and OpenAI Gym for the RL environment.',
    html_url: 'https://github.com/rubencg195/rl-training-quadruped-robot-pybullet-openai-gym',
    stargazers_count: 15,
    forks_count: 5,
    language: ['Python'],
    topics: ['reinforcement-learning', 'ppo', 'pybullet', 'openai-gym', 'robot-locomotion', 'quadruped', 'simulation', 'machine-learning'],
    updated_at: '2025-10-26T00:00:00Z',
    icon: '🕷️'
  }
];

// LinkedIn profile URL
export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/rubenchevez/';

// Personal Information
export const PERSONAL_INFO = {
  name: 'Ruben Chevez',
  title: 'Director | Machine Learning Operations at Nasdaq Verafin',
  email: 'rubencg195@hotmail.com',
  linkedin: 'https://linkedin.com/in/rubenchevez',
  github: 'https://github.com/rubencg195',
  location: 'St. John\'s, Newfoundland, Canada',
  bio: 'Visionary and results-driven technology leader with deep expertise in Machine Learning Operations (MLOps), cloud infrastructure, and scalable ML systems. Proven track record in designing, deploying, and managing ML pipelines from experimentation to production. Adept at leading cross-functional teams, aligning engineering efforts with business strategy, and fostering a culture of innovation, reliability, and continuous improvement. Experienced in regulatory-grade financial technologies, fraud detection, and ML model governance.',
  skills: [
    'Python', 'Java', 'C++', 'JavaScript', 'Scala', 'React', 'Node.js', 'Spring Boot',
    'AWS', 'Databricks', 'SageMaker', 'Bedrock', 'DataZone', 'EMR', 'Athena', 'Redshift', 'Firehose', 'ECR', 'ECS', 'S3', 'DynamoDB', 'RDS', 'Lambda', 'Step Functions', 'SQS', 'DMS', 'VPC',
    'Docker', 'Jenkins', 'Terraform', 'Git', 'MLOps', 'DevOps', 'CI/CD', 'Microservices', 'Agile', 'Scrum', 'TDD',
    'Technical Strategy', 'Project Management', 'Hiring', 'Mentorship', 'Performance Reviews', 'Fraud Detection', 'Financial Technology', 'Regulatory Compliance', 'Model Deployment', 'Data Engineering', 'ETL', 'Spark', 'Model Registry', 'Model Governance'
  ]
};

// Experience fallback data
export const EXPERIENCE_FALLBACK = [
  {
    title: 'Director | Machine Learning Operations',
    company: 'Nasdaq Verafin',
    period: 'Sep 2024 - Present',
    location: 'St. John\'s, Newfoundland, Canada',
    description: 'Spearheaded the strategic development of the company\'s first MLOps infrastructure, enabling seamless model deployment and monitoring.',
    technologies: ['Python', 'AWS SageMaker', 'Jenkins', 'GitHub', 'Athena', 'Model Registry'],
    achievements: [
      'Spearheaded the strategic development of the company\'s first MLOps infrastructure, enabling seamless model deployment and monitoring',
      'Led a team of six developers and one co-op student to enhance ML system reliability, reduce latency, and ensure regulatory compliance',
      'Automated deployment using GitHub templates integrated with Jenkins CI/CD pipelines and a UI Hub for tracking and deployment via AWS SageMaker Model Registry',
      'Developed and deployed a state-of-the-art ML model for Check Fraud detection, integrating it into production systems',
      'Improved data pipeline efficiency by 60% and reduced operational costs by 85% through optimization of Athena queries and data lake structures',
      'Established a robust evaluation pipeline for open source models used in research and production'
    ]
  },
  {
    title: 'Senior Software Developer & Acting Team Lead | ML Pipeline',
    company: 'Nasdaq Verafin',
    period: 'Feb 2023 - Sep 2024',
    location: 'St. John\'s, Newfoundland, Canada',
    description: 'Built the foundation for the company\'s first MLOps-dedicated team; evaluated cloud vendors including AWS SageMaker and Databricks.',
    technologies: ['EMR', 'Spark', 'Athena', 'AWS SageMaker', 'Databricks', 'Python'],
    achievements: [
      'Built the foundation for the company\'s first MLOps-dedicated team; evaluated cloud vendors including AWS SageMaker and Databricks',
      'Designed EMR-based data collection pipelines leveraging Spark and Athena for high-throughput model training',
      'Maintained production-grade ML models responsible for detecting over $300K in fraudulent transactions annually',
      'Onboarded and mentored 30+ developers on ML infrastructure tools, enhancing organizational ML maturity'
    ]
  },
  {
    title: 'Data Scientist',
    company: 'Verafin',
    period: 'Jan 2023 - Feb 2023',
    location: 'St. John\'s, Newfoundland, Canada',
    description: 'Identified systemic barriers to scalable ML agent development.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis'],
    achievements: [
      'Identified systemic barriers to scalable ML agent development',
      'Designed and pitched a next-generation ML pipeline',
      'Laid the groundwork for company-wide MLOps adoption'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Verafin',
    period: 'Oct 2020 - Dec 2022',
    location: 'St. John\'s, Newfoundland, Canada',
    description: 'Designed and deployed an ML-based deposit fraud model, preventing $300K+ in fraud per year.',
    technologies: ['Java', 'Python', 'AWS ECS', 'Lambda', 'Machine Learning', 'ETL'],
    achievements: [
      'Designed and deployed ML-based deposit fraud model preventing $300K+ in fraud per year',
      'Developed scalable Java and Python backends deployed via AWS ECS and Lambda',
      'Engineered ML features using data science methodologies and robust ETL processes',
      'Implemented and validated ML models including decision trees, regression, clustering, and neural networks'
    ]
  },
  {
    title: 'Intern',
    company: 'Verafin',
    period: 'Jan 2020 - May 2020',
    location: 'St. John\'s, Newfoundland, Canada',
    description: 'Conducted R&D on card fraud datasets; compared tree-based models with deep learning on performance and interpretability.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Data Science'],
    achievements: [
      'Conducted R&D on card fraud datasets',
      'Compared tree-based models with deep learning on performance and interpretability',
      'Published findings internally, shaping early ML model selection strategies'
    ]
  }
];

// Education fallback data
export const EDUCATION_FALLBACK = [
  {
    title: 'M.Sc. in Computer Science',
    institution: 'Memorial University',
    year: '2020',
    location: 'Newfoundland, Canada',
    description: 'Advanced computer science degree with focus on machine learning and data analysis.',
    achievements: [
      'Fellow of the School of Graduate Studies (2020)',
      'Specialized in machine learning and artificial intelligence',
      'Conducted research in computational methods and algorithms'
    ]
  },
  {
    title: 'B.Sc. in Mechatronics Engineering',
    institution: 'Universidad Tecnológica Centroamericana (UNITEC)',
    year: '2018',
    location: 'Honduras',
    description: 'Comprehensive engineering program combining mechanical, electrical, and computer systems.',
    achievements: [
      'Integrated knowledge of mechanical, electrical, and software systems',
      'Developed expertise in automation and control systems',
      'Applied engineering principles to real-world problems'
    ]
  },
  {
    title: 'Additional Computer Science Coursework',
    institution: 'Universidad Tecnológica Centroamericana (UNITEC)',
    year: '2018',
    location: 'Honduras',
    description: 'Supplementary computer science studies to strengthen software development skills.',
    achievements: [
      'Enhanced programming and software development skills',
      'Studied advanced algorithms and data structures',
      'Gained expertise in software engineering practices'
    ]
  },
  {
    title: 'Certificate in Machine Learning and Big Data Analysis',
    institution: 'National Tsing Hua University',
    year: '2017',
    location: 'Taiwan',
    description: 'Specialized certification program focused on machine learning techniques and big data processing.',
    achievements: [
      'Completed intensive program in machine learning fundamentals',
      'Gained hands-on experience with big data analysis tools',
      'Applied ML techniques to real-world datasets'
    ]
  }
];
