import React, { useState } from "react";
import skillsData from "./data"; 

const SkillsComponent = () => {
  const [skills, setSkills] = useState(skillsData);

  return (
    <div>
      
        {skillsData.map((skill) => (
          <p className="SkillsData" key={skill.id}>
            <strong>{skill.name}</strong>
          </p>
        ))}
      
    </div>
  );
};

export default SkillsComponent;
