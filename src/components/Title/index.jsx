import { memo } from 'react';

import './style.css';

const Title = ({ title, description, subtitle }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  );
};

export default memo(Title);
