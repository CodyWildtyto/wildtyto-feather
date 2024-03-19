import { memo } from 'react';

import './style.css';

type TShortcut = {
    name: string;
    href: string;
    imgUrl: string;
    title: string;
    subtitle?: string;
}

function Shortcut ({ name, href, imgUrl, title, subtitle }: TShortcut) {
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
}

Shortcut.defaultProps = {
    subtitle: ''
}

export default memo(Shortcut);
