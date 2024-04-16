import Title from '../../components/Title';
import { DESCRIPTION } from '../../i18n/en';

import './style.css';

const IMAGE_PATH = {
  ICON_SVGTAG: './assets/projects-icon-svgtag.png',
  ICON_INTERLACE: './assets/projects-icon-interlace.png',
};

function Projects () {
  return (
    <section id="Projects">
      <Title
        description={DESCRIPTION.PROJECTS}
        title="Projects"
      />
      <div className="projects-container">
        <div className="projects-project-item projects-project-1">
          <img
            src={IMAGE_PATH.ICON_SVGTAG}
            alt="projects-icon-1"
            style={{ height: 100 }}
          />
          <h3>SVGTag.js</h3>
          <p>
            The plugin is able to insert SVG elements which are modifiable
            instead of IMG or OBJECT elements from SVG files.
          </p>
          {/* <a
            href="https://github.com/Wildtyto/SVGTag.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a> */}
        </div>
        <div className="projects-project-item projects-project-2">
          <img
            src={IMAGE_PATH.ICON_INTERLACE}
            alt="projects-icon-2"
            style={{ height: 90 }}
          />
          <h3>Interlace.js</h3>
          <p>
            The plugin execute stunt-man and preview when image file is been
            loading likes interlaced images.
          </p>
          {/* <a
            href="https://github.com/Wildtyto/Interlace.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
