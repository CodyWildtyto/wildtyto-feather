import { memo } from 'react';

import './style.css';

const Shortcut = ({ name, href, imgUrl, title, subtitle }) => {
  return (
    <a
      className={`intro-${name} intro-shortcut-item`}
      href={href}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <h5>{subtitle}</h5>
      <h4>{title}</h4>
    </a>
  );
};

export default memo(Shortcut);
