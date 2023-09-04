import Skills from '../../components/Skills';
import Title from '../../components/Title';

import './style.css';

const IMAGE_PATH = {
  AVATAR: './assets/about-avatar.jpeg',
};

const About = () => {
  return (
    <section id="About">
      <Title subtitle="Cody Wildtyto" title="About" />
      <div className="about-profile">
        <div className="about-block">
          <div
            className="about-avatar"
            style={{ backgroundImage: `url(${IMAGE_PATH.AVATAR})` }}
          ></div>
        </div>
        <div className="about-block">
          <Skills
            items={{
              angular: { experience: 7, frequency: 3, name: 'AngularJS' },
              axios: { experience: 3, frequency: 5, name: 'Axios' },
              bot: { experience: 8, frequency: 3, name: 'LINE Bot' },
              css3: { experience: 8, frequency: 6, name: 'CSS3' },
              express: { experience: 6, frequency: 4, name: 'Express' },
              ga: { experience: 5, frequency: 3, name: 'GA' },
              git: { experience: 9, frequency: 10, name: 'Git' },
              html5: { experience: 9, frequency: 3, name: 'HTML5' },
              js: { experience: 10, frequency: 10, name: 'JavaScript' },
              npm: { experience: 5, frequency: 8, name: 'NPM' },
              php: { experience: 1, frequency: 2, name: 'PHP' },
              pm2: { experience: 5, frequency: 6, name: 'PM2' },
              python: { experience: 2, frequency: 1, name: 'Python' },
              react: { experience: 7, frequency: 8, name: 'React' },
              request: { experience: 3, frequency: 2, name: 'Request' },
              restful: { experience: 8, frequency: 9, name: 'RESTful API' },
              rn: { experience: 6, frequency: 7, name: 'React Native' },
              sass: { experience: 4, frequency: 1, name: 'SASS' },
              scrum: { experience: 6, frequency: 2, name: 'Scrum' },
              sqlite: { experience: 2, frequency: 7, name: 'SQLite' },
              svg: { experience: 3, frequency: 8, name: 'SVG' },
              ui: { experience: 9, frequency: 5, name: 'UI' },
              ux: { experience: 9, frequency: 8, name: 'UX' },
              vsr: { experience: 4, frequency: 5, name: 'VSR' },
              vue: { experience: 7, frequency: 6, name: 'Vue.js' },
              webgl: { experience: 2, frequency: 4, name: 'WebGL' },
              webpack: { experience: 4, frequency: 9, name: 'Webpack' },
              websocket: { experience: 3, frequency: 5, name: 'WebSocket' },
            }}
          />
        </div>
      </div>
      <div className="about-bio">
        <p className="about-block">
          Since the first time I created my own website when I was 10 years old.
          I took a fancy to do creation of all about digital content. Such as
          animation, game and tool software. It defined my choice of my career
          in the future. Most of time, I was able to learn new skills of
          programming by my self. However, I was concerned about the design and
          the thinking of the users. The point was the key I decided to major in
          media design. Because of that, I am good at both of development and
          user experience.
        </p>
        <p className="about-block">
          Recently, my colleague and I designed a service in a hackathon. After
          that, we rebuilt the idea to a new chat bot -- noper. It helped people
          who usually have business conversation at messaging tools when they
          were working. To manage and notify progress of the tasks with team
          members. We released the service for public for few monthes. Although
          there were many users registered our service, it was hard to be main
          income for us. Unfortunately, we decided to close the project.
        </p>
        <p className="about-block">
          This years, I did full time jobs of front end developer and freelace
          jobs of full stack developer for few times. That is interesting to
          have chance to create different kind of products. I like to work with
          people cooperatively. Also I am excited to face challenge and solve
          them. Additionally, it is interesting to research new technology to
          me. With my skills of front end development and knowledge of back end.
          Hoping to have the opportunity to make more great works with great
          people.{' '}
        </p>
      </div>
    </section>
  );
};

export default About;
