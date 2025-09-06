import React, { useEffect, useRef, useState } from 'react';

const SkillsRadar = ({ skills = [] }) => {
  const canvasRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const animationRef = useRef();

  // Skill proficiency levels (0-100)
  const skillLevels = {
    'React': 95,
    'Node.js': 90,
    'Python': 85,
    'TypeScript': 90,
    'AWS': 88,
    'Docker': 82,
    'PostgreSQL': 85,
    'MongoDB': 80,
    'GraphQL': 78,
    'Serverless': 85,
    'Machine Learning': 75
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 60;

    let animationProgress = 0;

    const drawRadarGrid = () => {
      ctx.strokeStyle = 'rgba(66, 133, 244, 0.2)';
      ctx.lineWidth = 1;

      // Draw concentric circles
      for (let i = 1; i <= 5; i++) {
        const radius = (maxRadius / 5) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw radial lines
      const angleStep = (Math.PI * 2) / skills.length;
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * maxRadius;
        const y = centerY + Math.sin(angle) * maxRadius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    };

    const drawSkillPoints = () => {
      const angleStep = (Math.PI * 2) / skills.length;
      
      skills.forEach((skill, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const proficiency = skillLevels[skill] || 70;
        const radius = (maxRadius * proficiency / 100) * animationProgress;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Draw skill point
        ctx.beginPath();
        ctx.arc(x, y, hoveredSkill === skill ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = hoveredSkill === skill 
          ? 'rgba(52, 168, 83, 1)' 
          : 'rgba(66, 133, 244, 0.8)';
        ctx.fill();

        // Add glow effect
        if (hoveredSkill === skill) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(52, 168, 83, 0.8)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw skill label
        const labelRadius = maxRadius + 20;
        const labelX = centerX + Math.cos(angle) * labelRadius;
        const labelY = centerY + Math.sin(angle) * labelRadius;

        ctx.fillStyle = hoveredSkill === skill 
          ? 'rgba(52, 168, 83, 1)' 
          : 'rgba(100, 116, 139, 1)';
        ctx.font = hoveredSkill === skill ? 'bold 14px Inter' : '12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill, labelX, labelY);

        // Draw proficiency percentage
        if (hoveredSkill === skill) {
          ctx.font = '10px Inter';
          ctx.fillText(`${proficiency}%`, labelX, labelY + 15);
        }
      });
    };

    const drawSkillArea = () => {
      if (animationProgress < 0.1) return;

      ctx.beginPath();
      const angleStep = (Math.PI * 2) / skills.length;
      
      skills.forEach((skill, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const proficiency = skillLevels[skill] || 70;
        const radius = (maxRadius * proficiency / 100) * animationProgress;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.closePath();
      ctx.fillStyle = 'rgba(66, 133, 244, 0.1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(66, 133, 244, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      animationProgress = Math.min(animationProgress + 0.02, 1);
      
      drawRadarGrid();
      drawSkillArea();
      drawSkillPoints();

      if (animationProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let closestSkill = null;
      let closestDistance = Infinity;

      const angleStep = (Math.PI * 2) / skills.length;
      
      skills.forEach((skill, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const proficiency = skillLevels[skill] || 70;
        const radius = (maxRadius * proficiency / 100) * animationProgress;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
        
        if (distance < 20 && distance < closestDistance) {
          closestDistance = distance;
          closestSkill = skill;
        }
      });

      if (closestSkill !== hoveredSkill) {
        setHoveredSkill(closestSkill);
      }
    };

    const handleMouseLeave = () => {
      setHoveredSkill(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [skills, hoveredSkill]);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="glass-effect rounded-3xl p-8 shadow-material-3">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="cursor-crosshair"
        />
      </div>
      
      {hoveredSkill && (
        <div className="glass-effect rounded-2xl p-4 animate-fade-in">
          <h3 className="font-semibold text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            {hoveredSkill}
          </h3>
          <p className="text-center text-surface-600 dark:text-surface-400 mt-1">
            Proficiency: {skillLevels[hoveredSkill] || 70}%
          </p>
        </div>
      )}
    </div>
  );
};

export default SkillsRadar;
