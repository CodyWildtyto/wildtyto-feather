import './style.css';

const IMAGE_PATH = {
  CODY: '/assets/hello-cody.png',
  NOPER: '/assets/hello-noper.png',
  PROJECT: '/assets/hello-project.png',
  WORKS: '/assets/hello-works.png',
};

const Hello = () => {
  return (
    <section id="Hello">
      <div className="hello-shortcuts">
        <a
          className="hello-noper hello-shortcut-item"
          href="/#/noper"
          style={{ backgroundImage: `url(${IMAGE_PATH.NOPER})` }}
        >
          <h5>The Recently Work</h5>
          <h4>noper</h4>
        </a>
        <a
          className="hello-about hello-shortcut-item"
          href="/#/about"
          style={{ backgroundImage: `url(${IMAGE_PATH.CODY})` }}
        >
          <h4>About</h4>
        </a>
        <a
          className="hello-work hello-shortcut-item"
          href="/#/work"
          style={{ backgroundImage: `url(${IMAGE_PATH.WORKS})` }}
        >
          <h4>Work</h4>
        </a>
        <a
          className="hello-projects hello-shortcut-item"
          href="/#/projects"
          style={{ backgroundImage: `url(${IMAGE_PATH.PROJECT})` }}
        >
          <h4>Projects</h4>
        </a>
      </div>
    </section>
  );
};

export default Hello;
