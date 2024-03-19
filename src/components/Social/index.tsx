import { memo } from 'react';

import { IMAGE_PATH } from '../../configs/constants';

import './style.css';

function Social () {

  return (
    <div className="social">
      <a
        className="iconGithub"
        href="https://github.com/CodyWildtyto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={IMAGE_PATH.GITHUB} alt="nav-github-icon" />
      </a>
      <a
        className="iconLinkedin"
        href="https://www.linkedin.com/in/codyhjlin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={IMAGE_PATH.LINKEDIN} alt="nav-linkedin-icon" />
      </a>
      <a className="iconMail" href="mailto:cody.wildtyto@gmail.com">
        <img src={IMAGE_PATH.MAIL} alt="nav-mail-icon" />
      </a>
    </div>
  );
}

export default memo(Social);
