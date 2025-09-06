import React, { useState, useEffect } from 'react';
import { fetchLinkedInProfile } from '../utils/githubUtils';
import { EXPERIENCE_FALLBACK, EDUCATION_FALLBACK, LINKEDIN_PROFILE_URL, ENABLE_LINKEDIN_PARSING } from '../constants';
import Timeline from './Timeline';

const ExperienceEducation = () => {
  // Initialize with fallback data immediately
  const [data, setData] = useState({ 
    experience: EXPERIENCE_FALLBACK, 
    education: EDUCATION_FALLBACK 
  });

  useEffect(() => {
    const loadData = async () => {
      // Only attempt LinkedIn parsing if explicitly enabled
      if (!ENABLE_LINKEDIN_PARSING) {
        return;
      }

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
        description="Leading Machine Learning Operations and technical initiatives in regulatory-grade financial technologies at Nasdaq Verafin"
      />
      
      {/* Education Timeline */}
      <Timeline 
        data={data.education}
        title="Education & Certifications"
        description="Advanced degrees in Computer Science and Machine Learning, with specialized training from top international institutions"
      />
    </div>
  );
};

export default ExperienceEducation;