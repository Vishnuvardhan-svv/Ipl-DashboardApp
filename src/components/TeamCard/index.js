import {Link} from 'react-router-dom'
import './index.css'
const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl} = each
  return (
    <li className="li-container">
      <img src={teamImageUrl} alt={name} className="logo" />
      <p className="team-name">{name}</p>
    </li>
  )
}
export default TeamCard
