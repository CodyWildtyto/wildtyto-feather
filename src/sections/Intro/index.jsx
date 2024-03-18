import Hello from '../../components/Hello';
import Logo from '../../components/Logo';
import Shortcut from '../../components/Shortcut';
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
        <Shortcut
          href="/#/works"
          imgUrl={IMAGE_PATH.WORKS}
          name="works"
          title="Works"
        />
        <Shortcut
          href="/#/about"
          imgUrl={IMAGE_PATH.CODY}
          name="about"
          title="About"
        />
        <Shortcut
          href="/#/noper"
          imgUrl={IMAGE_PATH.NOPER}
          name="noper"
          subtitle="The Classic Work"
          title="noper"
        />
        <Shortcut
          href="/#/projects"
          imgUrl={IMAGE_PATH.PROJECT}
          name="projects"
          title="Projects"
        />
      </div>
    </section>
  );
};

export default Intro;
