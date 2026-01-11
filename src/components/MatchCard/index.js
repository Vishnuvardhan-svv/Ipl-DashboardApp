// Write your code here
const MatchCard = props => {
  const {each} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = each
  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
