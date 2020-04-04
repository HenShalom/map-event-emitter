import React, { Component } from 'react'
import { Map, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import './App.css'

export default class MapContainer extends Component {
    state = {
        lat: 32.0755,
        lng: 34.7804,
        zoom: 15,
    }

    render() {
        const { newTowerMode, newTowerClick } = this.props
        const position = [this.state.lat, this.state.lng]

        return (
            <div className="map-container">

                {
                    newTowerMode && <h1 className="select-location-header">Select Location</h1>
                }
                <Map center={position} zoom={this.state.zoom} onclick={newTowerMode?newTowerClick:null}>
                    <FeatureGroup>
                        <EditControl
                            position='bottomleft'
                            onEdited={console.log}
                            onCreated={(e)=>{
                                debugger
                                console.log("t",e)
                            }}
                            onDeleted={console.log}
                            draw={{
                                rectangle: false
                            }}
                        />
                    </FeatureGroup>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.props.children}
                    {/* <Circle center={position} fillColor="blue" radius={200} /> */}
                </Map>
            </div>
        )
    }
}