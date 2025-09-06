// GitHub repositories to display in the portfolio
export const REPOSITORIES = [
  {
    id: 'aws-backend-frontend-behind-cognito-auth-cloudfront',
    name: 'AWS Backend Frontend with Cognito Auth',
    description: 'Demonstrate how to protect a backend and frontend on AWS behind Cognito authentication',
    url: 'https://github.com/rubencg195/aws-backend-frontend-behind-cognito-auth-cloudfront',
    owner: 'rubencg195',
    repo: 'aws-backend-frontend-behind-cognito-auth-cloudfront',
    technologies: ['AWS', 'Cognito', 'CloudFront', 'Lambda', 'React', 'Terraform']
  },
  {
    id: 'aws-website-hosting-user-auth-cognito',
    name: 'AWS Website Hosting with User Auth',
    description: 'AWS website hosting with user authentication using Cognito',
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
