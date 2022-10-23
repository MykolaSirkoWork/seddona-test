
import GameCard from './GameCard';

const GamesList = ({ bgClass, title, games}) => {
  return (
    <div className={`games-list ${bgClass ?? ''}`}>
      <div className='container'>
        <h2 className='games-list__title'>{title}</h2>
        <div className='games-list__cards'>
          {games.map((game, idx) => (
            <GameCard
              key={game.title + idx}
              imgSrc={game.img}
              released={game.isReleased}
              title={game.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GamesList;