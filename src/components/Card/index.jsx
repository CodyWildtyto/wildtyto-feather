import { memo } from 'react';

import './style.css';

const Card = ({
  children,
  icon,
  iconAlt,
  iconHeight,
  link,
  linkText = 'DEMO',
  organColor = '#3f3f3f',
  organs,
  title,
}) => {
  return (
    <div className="card">
      <h2>
        <img src={icon} alt={iconAlt} style={{ height: iconHeight }} />
        <span>{title}</span>
      </h2>
      <div className="card-specialities">
        {organs?.map((item) => (
          <span style={{ backgroundColor: organColor }}>{item}</span>
        ))}
      </div>
      <div className="card-explain">{children}</div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default memo(Card);
