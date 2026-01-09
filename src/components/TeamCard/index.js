import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl, id} = each
  return (
    <div className="li-container">
      <Link to={`/ipl/${id}`} className="link-item">
        <div className="align-side">
          <div>
            <img src={teamImageUrl} alt={name} className="logo" />
          </div>
          <div>
            <p className="team-name">{name}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default TeamCard
