import React, { Component } from 'react'
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'

const API_KEY = 'nFuDaQPSnyXJdwwcOShzaaXCPMzXk3hC1UEYHWm9'

class GetImageForm extends Component {
  state = {
    rover: 'Curiosity',
    camera: 'FHAZ',
    sol: 1000,
    photos: []
  }

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _fetchRoverImage = event => {
    event.preventDefault()
    const { rover, camera, sol } = this.state
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`

    fetch(url).then(r => r.json()).then(({ photos }) => {
      this.setState({ photos })
    })
  }

  render() {
    return (
      <div className="GetImageForm">
        <form>
          <label htmlFor="rover">Rover</label>
          <select onChange={this._change} name="rover" value={this.state.rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this._change} name="camera" value={this.state.camera}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this._change} name="sol" max="2000" min="1000" value={this.state.sol} />
        </form>
        <GetImageButton onClick={this._fetchRoverImage} />
        <ImageDisplay images={this.state.photos} />
      </div>
    )
  }
}

export default GetImageForm
