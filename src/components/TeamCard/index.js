import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl, id} = each
  return (
    <li className="li-container" key={id}>
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="align-side">
          <div>
            <img src={teamImageUrl} alt={name} className="logo" />
          </div>
          <div>
            <p className="team-name">{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
