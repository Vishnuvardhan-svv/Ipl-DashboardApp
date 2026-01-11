// Write your code here
import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = each
  return (
    <li className="li-container">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
