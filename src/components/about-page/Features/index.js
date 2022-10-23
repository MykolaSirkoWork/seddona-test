import FeatureCard from './FeatureCard';
import DownloadBtn from '../../common/DownloadBtn';

const Features = ({ features }) => {
  return (
    <div className="features container">
      <div className='features-cards'>
        {features.map((card, idx) => (
          <FeatureCard
            key={card.title + idx}
            imgSrc={card.img}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
      <DownloadBtn />
    </div>
  )
}

export default Features;