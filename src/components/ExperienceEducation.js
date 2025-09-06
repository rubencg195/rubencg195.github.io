import React, { useState, useEffect } from 'react';
import { fetchLinkedInProfile } from '../utils/githubUtils';
import { EXPERIENCE_FALLBACK, EDUCATION_FALLBACK, LINKEDIN_PROFILE_URL } from '../constants';
import Timeline from './Timeline';

const ExperienceEducation = () => {
  // Initialize with fallback data immediately
  const [data, setData] = useState({ 
    experience: EXPERIENCE_FALLBACK, 
    education: EDUCATION_FALLBACK 
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const linkedInData = await fetchLinkedInProfile(LINKEDIN_PROFILE_URL);
        // Only update if we actually got valid data with content
        if (linkedInData && 
            linkedInData.experience && 
            linkedInData.education &&
            linkedInData.experience.length > 0 && 
            linkedInData.education.length > 0) {
          setData(linkedInData);
        }
        // If LinkedIn parsing fails or returns empty data, keep fallback data
      } catch (error) {
        console.error('Error loading LinkedIn data:', error);
        // Fallback data is already set in initial state
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {/* Experience Timeline */}
      <Timeline 
        data={data.experience}
        title="Professional Experience"
        description="Building innovative solutions and leading technical initiatives across diverse industries"
      />
      
      {/* Education Timeline */}
      <Timeline 
        data={data.education}
        title="Education & Certifications"
        description="Continuous learning and professional development in cutting-edge technologies"
      />
    </div>
  );
};

export default ExperienceEducation;