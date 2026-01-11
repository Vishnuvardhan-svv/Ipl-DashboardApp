import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: formattedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div className="ul-container">
              {teamList.map(each => (
                <TeamCard each={each} key={each.id} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}
export default Home
