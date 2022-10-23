import Description from "../components/about-page/Description";
import Features from "../components/about-page/Features";
import GamesList from "../components/about-page/GamesLIst";
import { features, games } from '../data/index';

const About = () => {
  return (
    <div className="about">
      <Description />
      <Features  features={features} />
      <GamesList bgClass="grey-bg" games={games} title="You may alos like" />
      <GamesList games={games} title="OTHER GAMES BY SUPERYETI" />
    </div>
  )
}

export default About;