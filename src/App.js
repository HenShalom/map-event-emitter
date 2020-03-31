import React, { Component } from 'react'
import { Grommet } from 'grommet';

import MapContainer from './Map'
import TowerControler from './Components/TowerControler'
import './App.css'

export default class App extends Component {
  state = {
    towerList: []
  }

  render() {
    return (
      < Grommet plain>
        <div className="map-container">
          <TowerControler />
          <MapContainer />
        </div>
      </Grommet>
    )
  }
}