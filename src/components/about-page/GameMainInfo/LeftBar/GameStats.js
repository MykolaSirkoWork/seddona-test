import eth from '../../../../assets/images/icons/eth.svg'
const GameStats = () => {
  return (
    <div className="game-stats">
      <div className="d-flex f-fd-col">
        <p className="game-stats__amount">8.0k</p>
        <h4 className="game-stats__label">Items</h4>
      </div>
      <div className="d-flex f-fd-col">
        <p className="game-stats__amount">4.2k</p>
        <h4 className="game-stats__label">Owners</h4>
      </div>
      <div className="d-flex f-fd-col">
        <div className="d-flex">
          <img src={eth} />
          <p className="game-stats__amount">8.0k</p>
        </div>
        <h4 className="game-stats__label">Total Volume</h4>
      </div>
    </div>
  )
}
export default GameStats;