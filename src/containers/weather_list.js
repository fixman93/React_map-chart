import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) { // ako nam treba odredjeni state, npr weather stavimo u zagradu "weather" umesto "state"
  return {
    weather  // onda ovde ne moramo da pisemo state.weather nego samo weather. Ako koristimo isti naziv za weather: weather mozemo onda samo jednom da napisemo "weather"
    // ovo je ES6 sintaksa
  }
}

export default connect(mapStateToProps)(WeatherList)
