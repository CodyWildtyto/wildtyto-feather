import Hello from '../../components/Hello';
import Logo from '../../components/Logo';
import './style.css';

const IMAGE_PATH = {
  CODY: '/assets/intro-cody.png',
  NOPER: '/assets/intro-noper.png',
  PROJECT: '/assets/intro-project.png',
  WORKS: '/assets/intro-works.png',
};

const Intro = () => {
  return (
    <section id="Intro">
      <Logo />
      <Hello />
      <div className="intro-shortcuts">
        <a
          className="intro-noper intro-shortcut-item"
          href="/#/noper"
          style={{ backgroundImage: `url(${IMAGE_PATH.NOPER})` }}
        >
          <h5>The Recently Works</h5>
          <h4>noper</h4>
        </a>
        <a
          className="intro-about intro-shortcut-item"
          href="/#/about"
          style={{ backgroundImage: `url(${IMAGE_PATH.CODY})` }}
        >
          <h4>About</h4>
        </a>
        <a
          className="intro-works intro-shortcut-item"
          href="/#/works"
          style={{ backgroundImage: `url(${IMAGE_PATH.WORKS})` }}
        >
          <h4>Works</h4>
        </a>
        <a
          className="intro-projects intro-shortcut-item"
          href="/#/projects"
          style={{ backgroundImage: `url(${IMAGE_PATH.PROJECT})` }}
        >
          <h4>Projects</h4>
        </a>
      </div>
    </section>
  );
};

export default Intro;
