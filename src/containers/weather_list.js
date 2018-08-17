import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    //const lon = cityData.city.coord.lon
    //const lng = cityData.city.coord.lng
    // sa ES6 mozemo da napisemo ovako:
    const { lon, lat } = cityData.city.coord // Automacki prvo uzima posle coord, log pa lng promenjivu
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}  /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) { // ako nam treba odredjeni state, npr weather stavimo u zagradu "weather" umesto "state"
  return { weather }
    // onda ovde ne moramo da pisemo state.weather nego samo weather. Ako koristimo isti naziv za weather: weather mozemo onda samo jednom da napisemo "weather"
    // ovo je ES6 sintaksa
}

export default connect(mapStateToProps)(WeatherList)
