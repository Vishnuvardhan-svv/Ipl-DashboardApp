// Write your code here
import {Component} from 'react'
import './index.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamBanner: '', latestMatchDetails: {}, recentMatchDetails: []}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerData = data.team_banner_url
    const latestMatchDetailsdata = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recentMatchDetailsData = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      teamBanner: teamBannerData,
      latestMatchDetails: latestMatchDetailsdata,
      recentMatchDetails: recentMatchDetailsData,
    })
  }

  render() {
    const {teamBanner, latestMatchDetails, recentMatchDetails} = this.state
    return (
      <div className="bg-container-2">
        <img src={teamBanner} />
        <h1>Latest match</h1>
        <LatestMatch
          key={latestMatchDetails.id}
          latestMatchDetails={latestMatchDetails}
        />
        <ul className="ul-container">
          {recentMatchDetails.map(each => (
            <MatchCard key={each.id} each={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
