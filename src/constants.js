// Configuration constants
export const ENABLE_LINKEDIN_PARSING = false; // Disable LinkedIn parsing by default
export const ENABLE_GITHUB_API = false; // Disable GitHub API - descriptions not yet in GitHub repos
export const ENABLE_FIREBASE_DEBUG = false; // Enable Firebase debugging tools in console

// GitHub repository URLs
export const GITHUB_REPOS = [
  // RL & simulation
  'https://github.com/rubencg195/pybullet-robot-dog',
  'https://github.com/rubencg195/aws-pybullet-environment',
  'https://github.com/rubencg195/robot-dog-simulator',
  'https://github.com/rubencg195/rl-training-quadruped-robot-pybullet-openai-gym',
  // NVIDIA
  'https://github.com/rubencg195/aws-nvidia-dgl-gnn-xgboost',
  // Everything else
  'https://github.com/rubencg195/aws-langchain-web-and-database-search',
  'https://github.com/rubencg195/gitLab-sagemaker-cicd-for-ml-training-and-hosting',
  'https://github.com/rubencg195/aws-backend-frontend-behind-cognito-auth-cloudfront',
  'https://github.com/rubencg195/aws-website-hosting-user-auth-cognito',
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
    icon: '🐕'
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
    icon: '🖥️'
  },
  {
    id: 'robot-dog-simulator',
    name: 'Robot Dog Simulator',
    description: 'Interactive 2D/3D robot dog simulator with real-time inverse kinematics. Built with React, Three.js, and TypeScript. Live preview at robotdogsim.rubenchevez.com.',
    html_url: 'https://github.com/rubencg195/robot-dog-simulator',
    stargazers_count: 0,
    forks_count: 0,
    language: ['TypeScript', 'CSS', 'HTML'],
    topics: ['robotics', 'three-js', 'inverse-kinematics', 'simulation', 'react', 'vite', 'typescript', 'quadruped', 'legged-robots'],
    updated_at: '2026-05-29T00:00:00Z',
    icon: '🎮'
  },
  {
    id: 'rl-training-quadruped-robot-pybullet-openai-gym',
    name: 'RL Training for Quadruped Robot Locomotion with PyBullet and OpenAI Gym',
    description: 'Reinforcement learning implementation training a 4-legged robot to walk using PPO algorithm, PyBullet physics simulation, and OpenAI Gym environment.',
    html_url: 'https://github.com/rubencg195/rl-training-quadruped-robot-pybullet-openai-gym',
    stargazers_count: 15,
    forks_count: 5,
    language: ['Python'],
    topics: ['reinforcement-learning', 'ppo', 'pybullet', 'openai-gym', 'robot-locomotion', 'quadruped', 'simulation', 'machine-learning'],
    updated_at: '2025-10-26T00:00:00Z',
    icon: '🕷️'
  },
  // NVIDIA
  {
    id: 'aws-nvidia-dgl-gnn-xgboost',
    name: 'AWS NVIDIA DGL GNN XGBoost - Fraud Detection Pipeline',
    description: 'Production ML infrastructure with NVIDIA GPU containers, Graph Neural Networks, and XGBoost for fraud detection. Features OpenTofu automation for SageMaker, ECR management, and MLOps pipeline.',
    html_url: 'https://github.com/rubencg195/aws-nvidia-dgl-gnn-xgboost',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform', 'Shell', 'Jupyter Notebook'],
    topics: ['aws', 'sagemaker', 'nvidia', 'gpu', 'gnn', 'xgboost', 'fraud-detection', 'opentofu', 'terraform', 'ml-infrastructure', 'docker', 'ecr', 'mlops', 'graph-neural-networks', 'cuGraph', 'dgl', 'ieee-dataset'],
    updated_at: '2025-10-22T00:00:00Z',
    icon: '🧠'
  },
  // Everything else
  {
    id: 'aws-langchain-web-and-database-search',
    name: 'AWS LangChain Web and Database Search with Bedrock',
    description: 'Serverless application combining web search and database retrieval with AWS Bedrock, Claude Haiku, and LangChain for AI-powered summarization. Deployed on AWS ECS Fargate using OpenTofu.',
    html_url: 'https://github.com/rubencg195/aws-langchain-web-and-database-search',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform', 'HCL'],
    topics: ['aws', 'bedrock', 'claude', 'langchain', 'ecs-fargate', 'opentofu', 'terraform', 'dynamodb', 'serverless', 'ai', 'web-search', 'database-retrieval', 'mlops'],
    updated_at: '2025-10-25T00:00:00Z',
    icon: '🧠'
  },
  {
    id: 'gitLab-sagemaker-cicd-for-ml-training-and-hosting',
    name: 'GitLab SageMaker CI/CD for ML Training and Hosting',
    description: 'Comprehensive MLOps solution for automated machine learning workflows using GitLab CI/CD, AWS SageMaker, artifact management, and monitoring.',
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
    description: 'Demonstrates securing AWS backend and frontend applications behind Cognito authentication with CloudFront distribution.',
    html_url: 'https://github.com/rubencg195/aws-backend-frontend-behind-cognito-auth-cloudfront',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Tailwind', 'Javascript', 'HTML', 'Terraform'],
    topics: ['aws', 'cognito', 'cloudfront', 'lambda', 'react', 'tailwind', 'javascript', 'html', 'terraform'],
    updated_at: '2024-01-15T10:30:00Z',
    icon: '☁️'
  },
  {
    id: 'aws-website-hosting-user-auth-cognito',
    name: 'AWS Hosting Comparison + Cognito Auth',
    description: 'Comparison of AWS hosting options (Amplify vs S3+CloudFront vs Elastic Beanstalk) with Cognito user authentication integration.',
    html_url: 'https://github.com/rubencg195/aws-website-hosting-user-auth-cognito',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Tailwind', 'Javascript', 'HTML', 'Terraform'],
    topics: ['aws', 'cognito', 's3', 'cloudfront', 'react', 'elastic-bean', 'amplify', 'tailwind', 'javascript', 'html', 'terraform'],
    updated_at: '2024-02-10T14:20:00Z',
    icon: '☁️'
  },
  {
    id: 'aws-mcp-databases-bedrock-unstructured-vector-db',
    name: 'AWS Bedrock Vector Database with Knowledge Bases',
    description: 'MLOps infrastructure for unstructured data retrieval using AWS Bedrock Knowledge Bases, RDS PostgreSQL with pgvector, and Claude for intelligent document processing and RAG applications.',
    html_url: 'https://github.com/rubencg195/aws-mcp-databases-bedrock-unstructured-vector-db',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'bedrock', 'claude', 'postgresql', 'pgvector', 'knowledge-bases', 'terraform', 'lambda', 's3', 'rds'],
    updated_at: '2024-03-05T09:15:00Z',
    icon: '🧠'
  },
  {
    id: 'aws-bedrock-agents-structured-db',
    name: 'AWS Bedrock Agents with Structured Data',
    description: 'Natural language SQL query system using AWS Bedrock Agents and Claude 3.7 for querying structured databases through Athena.',
    html_url: 'https://github.com/rubencg195/aws-bedrock-agents-structured-db',
    stargazers_count: 0,
    forks_count: 0,
    language: ['Python', 'Terraform'],
    topics: ['aws', 'bedrock', 'claude', 'athena', 'bedrock-agents', 'sql', 'terraform', 'structured-data', 'nlp'],
    updated_at: '2024-03-12T16:45:00Z',
    icon: '🧠'
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
  bio: 'Visionary and results-driven technology leader with a track record of building new products from the ground up. Currently leading the creation of a new Onboarding Threat Intelligence product for KYC fraud detection at Nasdaq Verafin, after previously founding and scaling the company\'s first MLOps infrastructure from scratch. Deep expertise in product development, cloud infrastructure, ML systems, and cross-functional team leadership. Adept at taking ambiguous problem spaces and turning them into production-grade platforms — from initial architecture through delivery. Experienced in regulatory-grade financial technologies, fraud detection, and ML model governance.',
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
    title: 'Director | Onboarding Threat Intelligence',
    company: 'Nasdaq Verafin',
    period: 'Mar 2026 - Present',
    location: 'St. John\'s, Newfoundland, Canada',
    description: 'Hand-picked to build a new product from scratch for KYC fraud detection, applying the same zero-to-one product development approach that made the MLOps initiative successful.',
    technologies: ['Python', 'AWS', 'Machine Learning', 'KYC', 'Fraud Detection', 'Product Development'],
    achievements: [
      'Selected to create a brand-new Onboarding Threat Intelligence product for KYC fraud detection, defining the vision, architecture, and roadmap from the ground up',
      'Applying proven zero-to-one product development expertise — previously built the company\'s entire MLOps infrastructure from scratch',
      'Leading cross-functional collaboration to identify KYC fraud patterns and translate them into production-grade detection capabilities',
      'Designing scalable cloud architecture and ML-driven analytics to support regulatory-grade onboarding threat detection'
    ]
  },
  {
    title: 'Director | Machine Learning Infrastructure and Deployment',
    subtitle_note: '(previously called Machine Learning Operations)',
    company: 'Nasdaq Verafin',
    period: 'Sep 2024 - Mar 2026',
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
