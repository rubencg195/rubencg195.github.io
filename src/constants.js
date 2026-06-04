// Configuration constants
export const ENABLE_LINKEDIN_PARSING = false; // Disable LinkedIn parsing by default
export const ENABLE_GITHUB_API = false; // Disable GitHub API - descriptions not yet in GitHub repos
export const ENABLE_FIREBASE_DEBUG = false; // Enable Firebase debugging tools in console

// GitHub repository URLs
export const GITHUB_REPOS = [
  // RL & simulation
  'https://github.com/rubencg195/pybullet-robot-dog',
  'https://github.com/rubencg195/aws-pybullet-environment',
  'https://github.com/rubencg195/rl-training-quadruped-robot-pybullet-openai-gym',
  // NVIDIA
  'https://github.com/rubencg195/aws-nvidia-dgl-gnn-xgboost',
  // Enterprise MLOps & Generative AI
  'https://github.com/rubencg195/gitLab-sagemaker-cicd-for-ml-training-and-hosting',
  'https://github.com/rubencg195/aws-mcp-databases-bedrock-unstructured-vector-db',
  'https://github.com/rubencg195/aws-bedrock-agents-structured-db'
];

// Fallback project data for when GitHub API is unavailable
export const PROJECTS_FALLBACK = [
  // RL & simulation
  {
    id: 'pybullet-robot-dog',
    name: 'PyBullet Robot Dog (SpotMicro-style Quadruped)',
    description: 'SpotMicro-style quadruped in PyBullet. V0 is a single leg on a test stand: joint sliders, foot path tracing, closed-form FK/IK, GIF/PNG capture, and shell scripts—stepping toward a full four-legged sim and hardware bridge.',
    html_url: 'https://github.com/rubencg195/pybullet-robot-dog',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python'],
    topics: ['pybullet', 'robotics', 'quadruped', 'simulation', 'kinematics', 'inverse-kinematics', 'urdf', 'spotmicro', 'legged-robots'],
    updated_at: '2026-05-10T00:00:00Z',
    icon: '🐕',
    category: 'deep-tech'
  },
  {
    id: 'aws-pybullet-environment',
    name: 'Remote GPU Workstation for PyBullet Simulation on AWS',
    description: 'Remote GPU workstation on AWS for PyBullet robotics simulation. Packer bakes NVIDIA drivers, GNOME desktop, VS Code, NICE DCV, and PyBullet into a golden AMI; OpenTofu deploys a g5.xlarge EC2 instance you connect to via browser — no local GPU required.',
    html_url: 'https://github.com/rubencg195/aws-pybullet-environment',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Shell', 'HCL', 'Python'],
    topics: ['aws', 'pybullet', 'opentofu', 'packer', 'gpu', 'nvidia', 'nice-dcv', 'ec2', 'simulation', 'ubuntu', 'infrastructure-as-code', 'robotics'],
    updated_at: '2026-05-09T00:00:00Z',
    icon: '🖥️',
    category: 'deep-tech'
  },
  {
    id: 'rl-training-quadruped-robot-pybullet-openai-gym',
    name: 'RL Training for Quadruped Robot Locomotion with PyBullet and OpenAI Gym',
    description: 'Reinforcement learning implementation for quadruped locomotion using PPO, PyBullet, and OpenAI Gym.',
    html_url: 'https://github.com/rubencg195/rl-training-quadruped-robot-pybullet-openai-gym',
    stargazers_count: 15,
    forks_count: 5,
    language: ['Python'],
    topics: ['reinforcement-learning', 'ppo', 'pybullet', 'openai-gym', 'robot-locomotion', 'quadruped', 'simulation', 'machine-learning'],
    updated_at: '2025-10-26T00:00:00Z',
    icon: '🕷️',
    category: 'deep-tech'
  },
  // NVIDIA
  {
    id: 'aws-nvidia-dgl-gnn-xgboost',
    name: 'AWS NVIDIA DGL GNN XGBoost - Fraud Detection Pipeline',
    description: 'Production fraud detection infrastructure with NVIDIA GPU containers, DGL graph models, and XGBoost. Includes OpenTofu automation for SageMaker, ECR, and MLOps pipelines.',
    html_url: 'https://github.com/rubencg195/aws-nvidia-dgl-gnn-xgboost',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform', 'Shell', 'Jupyter Notebook'],
    topics: ['aws', 'sagemaker', 'nvidia', 'gpu', 'gnn', 'xgboost', 'fraud-detection', 'opentofu', 'terraform', 'ml-infrastructure', 'docker', 'ecr', 'mlops', 'graph-neural-networks', 'cuGraph', 'dgl', 'ieee-dataset'],
    updated_at: '2025-10-22T00:00:00Z',
    icon: '🧠',
    category: 'enterprise-mlops'
  },
  {
    id: 'gitLab-sagemaker-cicd-for-ml-training-and-hosting',
    name: 'GitLab SageMaker CI/CD for ML Training and Hosting',
    description: 'Automated ML workflows using GitLab CI/CD and AWS SageMaker for training, artifact management, and model hosting. Infrastructure provisioned with Terraform.',
    html_url: 'https://github.com/rubencg195/gitLab-sagemaker-cicd-for-ml-training-and-hosting',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'sagemaker', 'gitlab-ci', 'mlops', 'cicd', 'terraform', 'python/terraform', 'shell', 'hcl', 'machine-learning', 'devops'],
    updated_at: '2025-09-01T00:00:00Z',
    icon: '🧠',
    category: 'enterprise-mlops'
  },
  {
    id: 'aws-mcp-databases-bedrock-unstructured-vector-db',
    name: 'AWS Bedrock Vector Database with Knowledge Bases',
    description: 'Document retrieval and RAG using AWS Bedrock Knowledge Bases, RDS PostgreSQL with pgvector, and Claude. Deployed with Terraform and Lambda on AWS.',
    html_url: 'https://github.com/rubencg195/aws-mcp-databases-bedrock-unstructured-vector-db',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'bedrock', 'claude', 'postgresql', 'pgvector', 'knowledge-bases', 'terraform', 'lambda', 's3', 'rds'],
    updated_at: '2024-03-05T09:15:00Z',
    icon: '🧠',
    category: 'enterprise-mlops'
  },
  {
    id: 'aws-bedrock-agents-structured-db',
    name: 'AWS Bedrock Agents with Structured Data',
    description: 'Natural language querying of structured data using AWS Bedrock Agents, Claude, and Amazon Athena.',
    html_url: 'https://github.com/rubencg195/aws-bedrock-agents-structured-db',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'bedrock', 'claude', 'athena', 'bedrock-agents', 'sql', 'terraform', 'structured-data', 'nlp'],
    updated_at: '2024-03-12T16:45:00Z',
    icon: '🧠',
    category: 'enterprise-mlops'
  }
];

// LinkedIn profile URL
export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/rubenchevez/';

// Personal Information
export const PERSONAL_INFO = {
  name: 'Ruben Chevez',
  title: 'Director | Onboarding Threat Intelligence at Nasdaq Verafin',
  email: 'rubencg195@hotmail.com',
  linkedin: 'https://linkedin.com/in/rubenchevez',
  github: 'https://github.com/rubencg195',
  location: 'St. John\'s, Newfoundland, Canada',
  website: 'https://rubenchevez.com/',
  bio: 'Product-minded engineering leader with 8+ years delivering new products and scalable systems from the ground up. Currently leading Onboarding Threat Intelligence for KYC fraud at Nasdaq Verafin, after building the company\'s first MLOps infrastructure. Background in cloud architecture, fraud detection, and engineering leadership.',
  skills: {
    'Languages': [
      'Python',
      'Java',
      'C++',
      'JavaScript',
      'Scala'
    ],
    'Frameworks': [
      'React',
      'Node.js',
      'Spring Boot'
    ],
    'Cloud': [
      'Amazon Web Services (AWS)',
      'Databricks'
    ],
    'Cloud Services': [
      'SageMaker',
      'Bedrock',
      'DataZone',
      'EMR',
      'Athena',
      'Redshift',
      'Firehose',
      'ECR',
      'ECS',
      'S3',
      'DynamoDB',
      'RDS',
      'Secrets Manager',
      'Lambda',
      'Step Functions',
      'SQS',
      'DMS',
      'VPC'
    ],
    'Tools & Platforms': [
      'Git',
      'Docker',
      'Jenkins',
      'Terraform'
    ],
    'Practices': [
      'MLOps',
      'Agile/Scrum',
      'TDD',
      'CI/CD',
      'DevOps',
      'Microservices'
    ],
    'Leadership': [
      'Technical Strategy',
      'Project Management',
      'Hiring',
      'Mentorship',
      'Performance Reviews'
    ]
  }
};

// Curated hero badges — product strategy + core tech (full breakdown in Skills section)
export const HERO_SKILL_HIGHLIGHTS = [
  {
    skills: ['Product Strategy', 'Technical Strategy', 'Project Management'],
    color: 'red'
  },
  {
    skills: ['AWS', 'MLOps', 'SageMaker', 'Cloud Architecture'],
    color: 'orange'
  },
  {
    skills: ['Python', 'Fraud Detection', 'CI/CD'],
    color: 'blue'
  }
];

// Grouped display layout for the Technical Skills section (2×2 matrix)
export const SKILLS_MATRIX_GROUPS = [
  {
    title: 'Leadership & Strategy',
    icon: '👔',
    categories: ['Leadership']
  },
  {
    title: 'Languages & Frameworks',
    icon: '💻',
    categories: ['Languages', 'Frameworks']
  },
  {
    title: 'Cloud & Platform',
    icon: '☁️',
    categories: ['Cloud', 'Cloud Services', 'Tools & Platforms']
  },
  {
    title: 'Engineering Practices',
    icon: '🛠️',
    categories: ['Practices']
  }
];

// Experience fallback data
export const EXPERIENCE_FALLBACK = [
  {
    title: 'Director | Onboarding Threat Intelligence',
    company: 'Nasdaq Verafin',
    period: 'Mar 2026 – Present',
    location: 'St. John\'s, Newfoundland, Canada',
    achievements: [
      'Spearheading the end-to-end technical strategy and engineering execution for a brand-new Onboarding Threat Intelligence product targeted at identifying and mitigating KYC (Know Your Customer) fraud.',
      'Leading cross-functional teams to design, architect, and deploy highly scalable cloud systems and automated threat detection pipelines from the ground up.'
    ]
  },
  {
    title: 'Director | Machine Learning Operations',
    company: 'Nasdaq Verafin',
    period: 'Sep 2024 – Mar 2026',
    location: 'St. John\'s, Newfoundland, Canada',
    achievements: [
      'Spearheaded the strategic development of the company\'s first MLOps infrastructure, enabling seamless model deployment and monitoring.',
      'Led a team of six developers and one co-op student to enhance ML system reliability, reduce latency, and ensure regulatory compliance.',
      'Automated deployment using GitHub templates integrated with Jenkins CI/CD pipelines and a UI Hub for tracking and deployment via AWS SageMaker Model Registry.',
      'Developed and deployed a state-of-the-art ML model for Check Fraud detection, integrating it into production systems.',
      'Improved data pipeline efficiency by 60% and reduced operational costs by 85% through optimization of Athena queries and data lake structures.',
      'Established a robust evaluation pipeline for open source models used in research and production.'
    ]
  },
  {
    title: 'Senior Software Developer & Acting Team Lead | ML Pipeline',
    company: 'Nasdaq Verafin',
    period: 'Feb 2023 – Sep 2024',
    location: 'St. John\'s, Newfoundland, Canada',
    achievements: [
      'Built the foundation for the company\'s first MLOps-dedicated team; evaluated cloud vendors including AWS SageMaker and Databricks.',
      'Designed EMR-based data collection pipelines leveraging Spark and Athena for high-throughput model training.',
      'Maintained production-grade ML models responsible for detecting over $300K in fraudulent transactions annually.',
      'Onboarded and mentored 30+ developers on ML infrastructure tools, enhancing organizational ML maturity.'
    ]
  },
  {
    title: 'Data Scientist',
    company: 'Verafin',
    period: 'Jan 2023 – Feb 2023',
    location: 'St. John\'s, Newfoundland, Canada',
    achievements: [
      'Identified systemic barriers to scalable ML agent development.',
      'Designed and pitched a next-generation ML pipeline, laying the groundwork for company-wide MLOps adoption.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Verafin',
    period: 'Oct 2020 – Dec 2022',
    location: 'St. John\'s, Newfoundland, Canada',
    achievements: [
      'Designed and deployed an ML-based deposit fraud model, preventing $300K+ in fraud per year.',
      'Developed scalable Java and Python backends deployed via AWS ECS and Lambda.',
      'Engineered ML features using data science methodologies and robust ETL processes.',
      'Implemented and validated ML models including decision trees, regression, clustering, and neural networks.'
    ]
  },
  {
    title: 'Intern',
    company: 'Verafin',
    period: 'Jan 2020 – May 2020',
    location: 'St. John\'s, Newfoundland, Canada',
    achievements: [
      'Conducted R&D on card fraud datasets; compared tree-based models with deep learning on performance and interpretability and published findings internally, shaping early ML model selection strategies.'
    ]
  }
];

// Education fallback data
export const EDUCATION_FALLBACK = [
  {
    title: 'M.Sc. in Computer Science',
    institution: 'Memorial University',
    year: '2020',
    location: 'Newfoundland, Canada'
  },
  {
    title: 'B.Sc. in Mechatronics Engineering',
    institution: 'Universidad Tecnológica Centroamericana (UNITEC)',
    year: '2018',
    location: 'Honduras'
  },
  {
    title: 'Additional Computer Science Coursework',
    institution: 'Universidad Tecnológica Centroamericana (UNITEC)',
    year: '2018',
    location: 'Honduras'
  },
  {
    title: 'Certificate in Machine Learning and Big Data Analysis',
    institution: 'National Tsing Hua University',
    year: '2017',
    location: 'Taiwan'
  },
  {
    title: 'Fellow of the School of Graduate Studies',
    institution: 'Memorial University',
    year: '2020',
    location: 'Newfoundland, Canada'
  }
];
