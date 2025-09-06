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

// Fallback resume data when LinkedIn blocks client-side fetches
export const EXPERIENCE_FALLBACK = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Independent Consulting',
    period: '2022 – Present'
  },
  {
    title: 'AWS Solutions Architect',
    company: 'Tech Startup',
    period: '2020 – 2022'
  },
  {
    title: 'Software Engineer',
    company: 'Enterprise Company',
    period: '2018 – 2020'
  },
  {
    title: 'Junior Developer',
    company: 'Development Agency',
    period: '2017 – 2018'
  }
];

export const EDUCATION_FALLBACK = [
  {
    title: 'AWS Certified Solutions Architect',
    institution: 'Professional Certification',
    year: '2021'
  },
  {
    title: 'B.S. in Computer Science',
    institution: 'Computer Science University',
    year: '2014 – 2018'
  },
  {
    title: 'Advanced Web Development',
    institution: 'React & Node.js Specialization',
    year: '2019'
  }
];
