import { useEffect } from 'react';

import Social from '../../components/Social';
import Svg from './../../factory/Svg';

import './style.css';

const Contact = () => {
  useEffect(() => {
    Svg.exchange('#Contact .iconGithub img');
    Svg.exchange('#Contact .iconLinkedin img');
    Svg.exchange('#Contact .iconMail img');
  }, []);

  return (
    <footer id="Contact">
      <h2>Thank You</h2>
      <Social />
      <h3>© Wildtyto</h3>
    </footer>
  );
};

export default Contact;
