import Description from "../components/about-page/Description";
import Features from "../components/about-page/Features";
import { features } from '../data/index';

const About = () => {
  return (
    <div className="about">
      <Description />
      <Features  features={features} />
    </div>
  )
}

export default About;