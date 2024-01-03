import { memo } from 'react';

import './style.css';

const SkillItem = ({ experience = 0, frequency = 0, name }) => {
  return (
    <span
      style={{
        bottom: `${experience * 10}%`,
        left: `${frequency * 10}%`,
      }}
    >
      {name}
    </span>
  );
};

const Skills = ({ items }) => {
  return (
    <div className="skills">
      {Object.keys(items).map((key) => (
        <SkillItem key={key} {...items[key]} />
      ))}
      <i>Experience</i>
      <i>Frequency</i>
    </div>
  );
};

export default memo(Skills);
