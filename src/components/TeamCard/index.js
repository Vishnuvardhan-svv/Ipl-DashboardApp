const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl} = each
  return (
    <li>
      <img src={teamImageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default TeamCard
