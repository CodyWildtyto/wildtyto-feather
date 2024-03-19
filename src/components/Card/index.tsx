import { memo } from 'react';

import './style.css';

type TCard = {
  children: string | JSX.Element | JSX.Element[];
  icon: string;
  iconAlt: string;
  iconHeight: number;
  link?: string;
  linkText?: string;
  organColor?: string;
  organs: string[];
  title: string;
}

function Card ({
  children,
  icon,
  iconAlt,
  iconHeight,
  link,
  linkText,
  organColor,
  organs,
  title,
}: TCard) {
  return (
    <div className="card">
      <h2>
        <img src={icon} alt={iconAlt} style={{ height: iconHeight }} />
        <span>{title}</span>
      </h2>
      <div className="card-specialities">
        {organs?.map((item) => (
          <span key={item} style={{ backgroundColor: organColor }}>{item}</span>
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
}

Card.defaultProps = {
  link: '',
  linkText: 'DEMO',
  organColor: '#3f3f3f',
}

export default memo(Card);
