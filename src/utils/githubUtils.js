// Utility functions for GitHub API and content processing

/**
 * Process README content to fix image paths
 * Converts relative image paths to absolute GitHub URLs
 */
export const processReadmeContent = (readmeContent, owner, repo, branch = 'main') => {
  if (!readmeContent) return readmeContent;

  // GitHub raw content base URL
  const baseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
  
  // Process different types of image references
  let processedContent = readmeContent
    // Fix relative image paths like ![alt](images/image.png)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, path) => {
      // Skip if already an absolute URL
      if (path.startsWith('http://') || path.startsWith('https://')) {
        return match;
      }
      
      // Convert relative path to absolute GitHub URL
      const absolutePath = path.startsWith('/') ? path.substring(1) : path;
      const absoluteUrl = `${baseUrl}/${absolutePath}`;
      
      return `![${alt}](${absoluteUrl})`;
    })
    // Fix HTML img tags
    .replace(/<img([^>]+)src="([^"]+)"/g, (match, attributes, src) => {
      // Skip if already an absolute URL
      if (src.startsWith('http://') || src.startsWith('https://')) {
        return match;
      }
      
      // Convert relative path to absolute GitHub URL
      const absolutePath = src.startsWith('/') ? src.substring(1) : src;
      const absoluteUrl = `${baseUrl}/${absolutePath}`;
      
      return `<img${attributes}src="${absoluteUrl}"`;
    });

  return processedContent;
};

/**
 * Fetch repository information including default branch
 */
export const fetchRepoInfo = async (owner, repo) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch repo info: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching repo info:', error);
    return null;
  }
};

/**
 * Fetch README with proper image path processing
 */
export const fetchReadmeWithImages = async (owner, repo) => {
  try {
    // First get repo info to determine the default branch
    const repoInfo = await fetchRepoInfo(owner, repo);
    const branch = repoInfo?.default_branch || 'main';
    
    // Fetch README
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
    if (!response.ok) {
      throw new Error(`Failed to fetch README: ${response.status}`);
    }
    
    const data = await response.json();
    // Properly decode base64 README as UTF-8 to preserve emoji/unicode
    const binaryString = atob(data.content);
    const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
    const readmeContent = new TextDecoder('utf-8').decode(bytes);
    
    // Process the content to fix image paths
    const processedContent = processReadmeContent(readmeContent, owner, repo, branch);
    
    return processedContent;
  } catch (error) {
    console.error('Error fetching README:', error);
    throw error;
  }
};
