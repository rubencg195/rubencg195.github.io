// GitHub repositories to display in the portfolio
export const REPOSITORIES = [
  {
    id: 'aws-backend-frontend-behind-cognito-auth-cloudfront',
    name: 'AWS Backend/Frontend + Cognito Auth',
    description: 'Demonstrate how to protect a backend and frontend on AWS behind Cognito authentication',
    url: 'https://github.com/rubencg195/aws-backend-frontend-behind-cognito-auth-cloudfront',
    owner: 'rubencg195',
    repo: 'aws-backend-frontend-behind-cognito-auth-cloudfront',
    technologies: ['AWS', 'Cognito', 'CloudFront', 'Lambda', 'React', 'Terraform']
  },
  {
    id: 'aws-website-hosting-user-auth-cognito',
    name: 'AWS Hosting Comparison + Cognito Auth',
    description: 'Amplify vs S3+CloudFront vs Elastic Beanstalk',
    url: 'https://github.com/rubencg195/aws-website-hosting-user-auth-cognito',
    owner: 'rubencg195',
    repo: 'aws-website-hosting-user-auth-cognito',
    technologies: ['AWS', 'Cognito', 'S3', 'CloudFront', 'React']
  }
];

// GitHub API configuration
export const GITHUB_API = {
  BASE_URL: 'https://api.github.com',
  README_URL: (owner, repo) => `https://api.github.com/repos/${owner}/${repo}/readme`,
  REPO_URL: (owner, repo) => `https://api.github.com/repos/${owner}/${repo}`
};

// LinkedIn profile (hardcoded as requested)
export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/rubenchevez/';

// LinkedIn parsing disabled by default - set to true to enable parsing
export const ENABLE_LINKEDIN_PARSING = false;

// Professional experience data from resume
export const EXPERIENCE_FALLBACK = [
  {
    title: 'Director | Machine Learning Operations',
    company: 'Nasdaq Verafin',
    period: 'Sep 2024 – Present'
  },
  {
    title: 'Senior Software Developer & Acting Team Lead | ML Pipeline',
    company: 'Nasdaq Verafin',
    period: 'Feb 2023 – Sep 2024'
  },
  {
    title: 'Data Scientist',
    company: 'Verafin',
    period: 'Jan 2023 – Feb 2023'
  },
  {
    title: 'Software Developer',
    company: 'Verafin',
    period: 'Oct 2020 – Dec 2022'
  },
  {
    title: 'Intern',
    company: 'Verafin',
    period: 'Jan 2020 – May 2020'
  }
];

export const EDUCATION_FALLBACK = [
  {
    title: 'M.Sc. in Computer Science',
    institution: 'Memorial University, Newfoundland, Canada',
    year: '2020'
  },
  {
    title: 'B.Sc. in Mechatronics Engineering',
    institution: 'Universidad Tecnológica Centroamericana (UNITEC), Honduras',
    year: '2018'
  },
  {
    title: 'Certificate in Machine Learning and Big Data Analysis',
    institution: 'National Tsing Hua University, Taiwan',
    year: '2017'
  },
  {
    title: 'Fellow of the School of Graduate Studies',
    institution: 'Memorial University, Newfoundland, Canada',
    year: '2020'
  }
];
