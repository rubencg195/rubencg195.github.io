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
export const fetchRepoInfo = async (repoUrl) => {
  try {
    // Extract owner and repo from GitHub URL
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) throw new Error('Invalid GitHub URL');
    
    const [, owner, repo] = match;
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
export const fetchReadmeWithImages = async (repoUrl) => {
  try {
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) throw new Error('Invalid GitHub URL');
    
    const [, owner, repo] = match;
    
    // First get repo info to determine the default branch
    const repoInfo = await fetchRepoInfo(repoUrl);
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

/**
 * Fetch and parse LinkedIn profile using public content readers.
 * Note: Direct HTML scraping from LinkedIn is blocked by CORS/auth.
 * We use Jina AI Reader as a universal web content reader endpoint.
 */
export const fetchLinkedInProfile = async (profileUrl) => {
  try {
    // Attempt to use alternative reader that may not block
    const encoded = encodeURIComponent(profileUrl);
    const endpoints = [
      `https://r.jina.ai/${encoded}`,
      `https://r.jina.ai/http://r.jina.ai/${encoded}`,
    ];
    let text = '';
    for (const url of endpoints) {
      try {
        const resp = await fetch(url);
        if (resp.ok) { text = await resp.text(); break; }
      } catch (_) { /* try next */ }
    }
    if (!text) throw new Error('LinkedIn fetch failed: all endpoints blocked');

    // Very simple heuristic parser: extract Experience and Education sections
    const experience = [];
    const education = [];

    const expRegex = /(Experience|Experiencia)[\s\S]*?(Education|Educación|Licenses|Licencias)/i;
    const eduRegex = /(Education|Educación)[\s\S]*/i;

    const expMatch = text.match(expRegex);
    const eduMatch = text.match(eduRegex);

    if (expMatch) {
      const expBlock = expMatch[0];
      const roleRegex = /(\n|^)\s*([A-Z][^\n]+)\s*\n\s*([A-Z][^\n]+)\s*\n\s*([A-Za-z]{3,}.*?\d{4}.*?)(\n|$)/g;
      let m;
      while ((m = roleRegex.exec(expBlock)) !== null) {
        experience.push({
          title: m[2]?.trim(),
          company: m[3]?.trim(),
          period: m[4]?.trim(),
        });
      }
    }

    if (eduMatch) {
      const eduBlock = eduMatch[0];
      const eduItem = /(\n|^)\s*([A-Z][^\n]+)\s*\n\s*([A-Z][^\n]+)\s*\n\s*(\d{4}.*?\d{4}|\d{4}.*?Present|Presente)?/g;
      let m;
      while ((m = eduItem.exec(eduBlock)) !== null) {
        education.push({
          school: m[2]?.trim(),
          degree: m[3]?.trim(),
          period: (m[4] || '').trim(),
        });
      }
    }

    return { experience, education, raw: text };
  } catch (e) {
    console.error('Error fetching LinkedIn profile:', e);
    return { experience: [], education: [], raw: '' };
  }
};
