import { useEffect } from 'react';

import Social from '../../components/Social';
import Title from '../../components/Title';
import Svg from '../../utils/Svg';

import './style.css';

function Contact () {
  useEffect(() => {
    Svg.exchange('#Contact .iconGithub img');
    Svg.exchange('#Contact .iconLinkedin img');
    Svg.exchange('#Contact .iconMail img');
  }, []);

  return (
    <footer id="Contact">
      <Title title="Thank You" />
      <Social />
      <h3>© Cody Lin</h3>
    </footer>
  );
}

export default Contact;
