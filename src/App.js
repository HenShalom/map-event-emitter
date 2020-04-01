import React, { Component } from 'react'
import { Grommet } from 'grommet';
import { Map, Circle } from 'react-leaflet'
import Tower from './Utils/Tower'
import MapContainer from './Map'
import TowerControler from './Components/TowerControler'
import './App.css'

export default class App extends Component {
  state = {
    towerList: [],
    newTowerMode: false
  }

  addTower = (event) => {
    this.setState((p) => {
      return {
        newTowerMode: false,
        newTower: null,
        towerList: [
          new Tower(event.latlng, p.newTower)
          , ...p.towerList]
      }
    })
  }

  newTowerMode = (newTower) => {
    this.setState({
      newTowerMode: true,
      newTower
    })
  }

  render() {
    const { newTowerMode, towerList } = this.state

    return (
      < Grommet plain>
        <TowerControler addTower={this.newTowerMode} />
        <MapContainer newTowerMode={newTowerMode} newTowerClick={this.addTower}>
          {
            towerList.map(tower =>
              <Circle center={tower.location} fillColor={tower.color} radius={tower.radius} />
            )
          }
        </MapContainer>
      </Grommet>
    )
  }
}